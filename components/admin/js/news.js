import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './Routers/Router';
import Footer from './footer';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ModalCKeditor from './ModalCKEditor';
import { submiUpdatetNews, getDataNew } from '../../api/resource';

const News = () => {
  let [id, setId] = useState(Number);
  let [data, setData] = useState([]);

  useEffect(async () => {
    const data = await getDataNew();
    setData(data);
  }, []);

  return (
    <div>
      <br />
      <button className="btn btn-outline-success" style={{ float: 'right' }}>
        {' '}
        <span>
          <Link to="/addnew"> Add new</Link>
        </span>
      </button>
      <b>
        <h2>News</h2>
      </b>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>STT</th>
            <th>Title</th>
            <th>Content</th>
            <th>Create at</th>
            <th>Update at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr>
              <ModalCKeditor
                submit={submiUpdatetNews}
                id={value.id}
                data={value}
              />

              <td>2</td>
              <td>John</td>
              <td>
                <button
                  className="btn btn-outline-info"
                  data-toggle="modal"
                  data-target={'#donateModel' + value.id}
                  onClick={() => {
                    setId(value.id);
                  }}
                >
                  View Detail{' '}
                </button>
              </td>
              <td>{value.created_at}</td>
              <td>{value.updated_at}</td>
              <td>
                <button
                  className="btn btn-success"
                  style={{ margin: '10px', color: 'white' }}
                >
                  {' '}
                  <span>
                    <Link to={'/editnew/' + value.id}> Edit</Link>
                  </span>{' '}
                </button>
                <button className="btn btn-danger"> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default News;
