import React, { Component } from 'react';

class UpdateNews extends Component {
    render() {
        return (
            <div className=" body bg-theme bg-theme1">
                <div id="wrapper">
                    <div className="clearfix" />
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-body text-body">
                                    <h4 className="text-body">Update Recent News</h4>
                                    <div className="container">
                                        <form action method="POST" encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="time" className="text-body">Time :</label>
                                                <input type="date" className="form-control text-body" name="time" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title" className="text-body">Title : </label>
                                                <input type="text" className="form-control text-body" name="title"  />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="image" className="text-body">Image :</label>
                                                <input type="file" className="form-control text-body" name="image"  required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content" className="text-body">Content : </label>
                                                <input type="text" class="form-control text-body" name="content" required />
                                            </div>
                                        
                                            <button type="submit" name="updatenews" className="btn btn-primary" style={{ float: 'right' }} >Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>     
                            <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up" /> </a>
                        </div>
                    </div></div></div>
        );
    }
}

export default UpdateNews;