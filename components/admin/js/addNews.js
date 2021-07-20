import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { createNews } from '../../api/resource';
const AddNews = () => {
  const submit = async () => {
    await createNews(form).then((res) => res);
  };
  let [form, setForm] = useState({});
  const onHandleForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    if (name == 'image') {
      setForm((prevState) => {
        return { ...prevState, [name]: event.target.files[0] };
      });
    } else {
      setForm((prevState) => {
        return { ...prevState, [name]: value };
      });
    }
  };
  const onHandleCKeditor = (event, editor) => {
    const data = editor.getData();
    setForm((prevState) => {
      return { ...prevState, content: data };
    });
  };

  return (
    <div className=" body bg-theme bg-theme1">
      <div id="wrapper">
        <div className="clearfix" />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body text-body">
                <h4 className="text-body">Add Recent News</h4>
                <div className="container">
                  <form action method="POST" encType="multipart/form-data">
                    <div className="form-group">
                      <label htmlFor="time" className="text-body">
                        Time :
                      </label>
                      <input
                        onChange={onHandleForm}
                        type="date"
                        className="form-control text-body"
                        name="_time"
                        placeholder="Time"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title" className="text-body">
                        Title :{' '}
                      </label>
                      <input
                        onChange={onHandleForm}
                        type="text"
                        className="form-control text-body"
                        name="title"
                        placeholder="Title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="image" className="text-body">
                        Image :
                      </label>
                      <input
                        onChange={onHandleForm}
                        type="file"
                        className="form-control text-body"
                        name="image"
                        placeholder="Image"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="content" className="text-body">
                        Content :{' '}
                      </label>
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>Comment here</p>"
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          onHandleCKeditor(event, editor);
                        }}
                        onBlur={(event, editor) => {
                          console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log('Focus.', editor);
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      name="addnews"
                      className="btn btn-primary"
                      style={{ float: 'right' }}
                      onClick={submit}
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

export default AddNews;
