import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './Routers/Router';
import Footer from './footer';
class Partner extends Component {
    render() {
        return (
            <div >
                <br></br>
                <button className='btn btn-outline-success' style={{ float: 'right' }}><span><Link to="/addpartner">Add new</Link></span></button>
                <b><h2>Partner</h2></b>
                <table className="table table-condensed">
                    <thead >
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Information</th>
                            <th>Link</th>
                            <th>Top</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>fgf</td>
                            <td>gfg</td>
                            <td>
                                <button className='btn btn-success' style={{ margin: '10px' }}> <span><Link to="/editpartner"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>fgf</td>
                            <td>gfg</td>
                            <td>
                                <button className='btn btn-success' style={{ margin: '10px' }}> <span><Link to="/editpartner"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>fgf</td>
                            <td>gfg</td>
                            <td>
                                <button className='btn btn-success' style={{ margin: '10px' }}><Link to="/editpartner"> Edit</Link></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
                        
            
        );
    }
}

export default Partner