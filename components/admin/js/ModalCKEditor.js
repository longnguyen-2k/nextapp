import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import config from './../../api/config';
import { useState, useEffect } from 'react';

const Modal = (props) => {
  let [data, setData] = useState({});
  useEffect(() => {
    setData(() => {
      return { ...props.data };
    });
  }, {});
  return (
    <div
      className="modal fade"
      id={'donateModel' + props.id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="donateModel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header bg-orange">
            <h5 className="modal-title" id="donateModel">
              Edit
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              <CKEditor
                editor={ClassicEditor}
                data={props.data.content}
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
                      'http://localhost:8000/api/news/uploadImage/' + props.id,
                  },
                }}
              />
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                props.submit(props.id, data);
              }}
            >
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
