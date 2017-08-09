import * as Surplus from 'surplus';
Surplus;
import S from "s-js"
import { DataSignal } from "s-js";
export = (ctrl: any) => {
    var svgNS = "http://www.w3.org/2000/svg";

    var svg = document.createElementNS(svgNS, "svg");
    document.body.appendChild(svg);

    var circle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
    circle.setAttribute("cx", "100");
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", "red");

    // svg.appendChild(circle)
    // document.body.appendChild(svg);

    return <div>
        <section className="hero">
            <svg>
                <circle cx="100" cy="100" r="50" fill="blue" />
            </svg>
            <div className="row">
                <div id="admin" className="col s12">
                    <div className="card material-table">
                        <div className="table-header">
                            <span className="table-title">Material Datatable</span>
                            <div className="actions">
                                <a href="#add_users" className="modal-trigger waves-effect btn-flat nopadding"><i className="material-icons">person_add</i></a>
                                <a href="#" className="search-toggle waves-effect btn-flat nopadding"><i className="material-icons">search</i></a>
                            </div>
                        </div>
                        <table id="datatable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011/07/25</td>
                                    <td>$170,750</td>
                                </tr>
                                <tr>
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                    <td>$86,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
