import React, { useState, useEffect } from 'react';
import ModalCKeditor from './ModalCKEditor';
import { submiUpdatetNews, getDataNewById } from '../../api/resource';
import { useHistory, useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import config from '../../api/config';
const EditNews = (props) => {
  const { id } = useParams();
  let history = useHistory();
  let [data, setData] = useState({});
  useEffect(async () => {
    let get = await axios
      .get(config.prefixUrl + '/news/' + id)
      .then((res) => res.data);
    setData(get);
  }, {});
  const onHandleForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    if (name == 'image') {
      setData((prevState) => {
        return { ...prevState, [name]: event.target.files[0] };
      });
    } else {
      setData((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };
  return (
    <div className=" body bg-theme bg-theme1">
      <div id="wrapper">
        <div className="clearfix" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body text-body">
                <h4 className="text-body">Edit Recent News</h4>
                <div className="container">
                  <form encType="multipart/form-data">
                    <div className="form-group">
                      <label htmlFor="time" className="text-body">
                        Time :
                      </label>
                      <input
                        type="text"
                        className="form-control text-body"
                        name="_time"
                        onChange={onHandleForm}
                        value={data._time ? data._time : ' '}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title" className="text-body">
                        Title :{' '}
                      </label>
                      <input
                        type="text"
                        className="form-control text-body"
                        name="title"
                        value={data.title ? data.title : ''}
                      />
                      {data.title}
                    </div>

                    <div className="form-group">
                      <label htmlFor="content" className="text-body">
                        Content :{' '}
                      </label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={data.content}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                          const dataCKEdit = editor.getData();
                          setData((prevState) => {
                            return { ...prevState, content: dataCKEdit };
                          });
                        }}
                        onBlur={(event, editor) => {
                          console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log('Focus.', editor);
                        }}
                        config={{
                          ckfinder: {
                            uploadUrl:
                              'http://localhost:8000/api/news/uploadImage/' +
                              props.id,
                          },
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      name="editnews"
                      className="btn btn-primary"
                      style={{ float: 'right' }}
                      onClick={() => {
                        submiUpdatetNews(id, { ...data });
                        history.goBack();
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <a href="javaScript:void();" className="back-to-top">
              <i className="fa fa-angle-double-up" />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
