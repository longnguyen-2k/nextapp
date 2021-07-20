import React, { Component } from 'react';
import { Button, Table } from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Routes from './Routers/Router';
import Footer from './footer';

class Milestone extends Component {
    render() {
        return (
            <div>
                <br></br>
                <button className='btn btn-outline-success'style={{ float: 'right' }}> <span><Link to="/addmilestone"> Add new</Link></span></button>
                <b><h2>Milestone</h2></b>
                <table className="table table-condensed">
                    <thead >
                        <tr>
                            <th>STT</th>
                            <th>Time</th>
                            <th>Contact</th>
                            <th>Information</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>gtytytyutyuyiyu</td>
                            <td>
                                <button className='btn btn-success'style = {{margin:'10px'}}> <span><Link to="/editmilestone"> Edit</Link></span></button>
                                <button className='btn btn-danger'> Delete</button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        );
    }
}

export default Milestone;