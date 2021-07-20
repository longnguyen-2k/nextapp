import React, { Component } from 'react';

class AddPartners extends Component {
  render() {
    return (
      <div className=" body bg-theme bg-theme1">
        <div id="wrapper">
          <div className="clearfix" />
          <div className="content-wrapper">
            <div className="container-fluid">
              <div className="card">
                <div className="card-body text-body">
                  <h4 className="text-body">Add Partner</h4>
                  <div className="container">
                    <form action method="POST" encType="multipart/form-data">
                      <div className="form-group">
                        <label htmlFor="name" className="text-body">
                          Name :
                        </label>
                        <input
                          type="text"
                          className="form-control text-body"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="image" className="text-body">
                          Image :
                        </label>
                        <input
                          type="file"
                          className="form-control text-body"
                          name="image"
                          placeholder="Image"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="infor" className="text-body">
                          Information :{' '}
                        </label>
                        <input
                          type="text"
                          className="form-control text-body"
                          name="infor"
                          placeholder="Information"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="link" className="text-body">
                          Link :{' '}
                        </label>
                        <input
                          type="text"
                          className="form-control text-body"
                          name="link"
                          placeholder="Link"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        name="addpartners"
                        className="btn btn-primary"
                        style={{ float: 'right' }}
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
  }
}

export default AddPartners;
