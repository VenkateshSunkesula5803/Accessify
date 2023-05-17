import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function view() {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar" >
                <div _ngcontent-ulf-c132="" class="layout-container">
                    <Sidebar />
                    <div>
                        <div _ngcontent-ulf-c142="" class="row mt-2 container-fluid" >
                            <div _ngcontent-ulf-c142="" class="col-md-12 stretch-card" >
                                <div _ngcontent-ulf-c142="" class="card">
                                    <div _ngcontent-ulf-c142="" class="card-body">
                                        <div _ngcontent-ulf-c142="" class="row pb-3">
                                            <div _ngcontent-ulf-c142="" class="col-md-6" >
                                                <h6 _ngcontent-ulf-c142=""><strong _ngcontent-ulf-c142="">Filter Text
                                                    Questions:</strong></h6>
                                            </div>
                                        </div>
                                        <div _ngcontent-ulf-c142="" class="row pb-3 form-group" >
                                            <div _ngcontent-ulf-c142="" class="col-md"><select _ngcontent-ulf-c142=""
                                                required="" name="type"
                                                class="form-control default-input ng-untouched ng-pristine ng-invalid"
                                                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
                                                <option _ngcontent-ulf-c142="" value="" selected="">-- Select Subject --
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="l81c2xlj"> Zoho_1_verbal </option>
                                                <option _ngcontent-ulf-c142="" value="l88nu6lx"> Zoho _ C Fundamentals
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="l88wfgw1"> Zoho Advanced
                                                    Programming </option>
                                                <option _ngcontent-ulf-c142="" value="l89x3921"> Zoho Basic Programming
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="l8e4c1yf"> Technical Practice
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="l8n1iaps"> Dynamic Programming
                                                </option>

                                            </select><small _ngcontent-ulf-c142="">Module</small></div>
                                            <div _ngcontent-ulf-c142="" class="col-md"><select _ngcontent-ulf-c142=""
                                                name="type"
                                                class="form-control default-input ng-untouched ng-pristine ng-valid"
                                                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
                                                <option _ngcontent-ulf-c142="" value="" selected="">-- Select Chapter --
                                                </option>
                                            </select><small _ngcontent-ulf-c142="">Chapter</small></div>
                                            <div _ngcontent-ulf-c142="" class="col-md"><select _ngcontent-ulf-c142=""
                                                name="type"
                                                class="form-control default-input ng-untouched ng-pristine ng-valid"
                                                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
                                                <option _ngcontent-ulf-c142="" value="" selected=""> -- Select
                                                    Difficulty --</option>
                                                <option _ngcontent-ulf-c142="" value="easy"> Easy </option>
                                                <option _ngcontent-ulf-c142="" value="medium"> Medium </option>
                                                <option _ngcontent-ulf-c142="" value="difficulty"> Difficulty </option>
                                            </select><small _ngcontent-ulf-c142="">Difficulty</small></div>
                                            <div _ngcontent-ulf-c142="" class="col-md"><input
                                                type="text" name="reference" placeholder="Reference"
                                                class="form-control default-input ng-untouched ng-pristine ng-valid" /><small
                                                    _ngcontent-ulf-c142="">Reference</small></div>
                                            <div _ngcontent-ulf-c142="" class="col-md"><select _ngcontent-ulf-c142=""
                                                name="type"
                                                class="form-control default-input ng-untouched ng-pristine ng-valid"
                                                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
                                                <option _ngcontent-ulf-c142="" value="" selected="">--Select Question
                                                    Type</option>
                                                <option _ngcontent-ulf-c142="" value="single_option">Single Correct
                                                    Option</option>
                                                <option _ngcontent-ulf-c142="" value="multi_option">Multi Correct Option
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="multi_choice_partial">Multi
                                                    Correct With Partial Marking</option>
                                                <option _ngcontent-ulf-c142="" value="fill_in_blanks">Fill in the Blanks
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="true_or_false">True or False
                                                </option>
                                                <option _ngcontent-ulf-c142="" value="writing">Writing</option>
                                                <option _ngcontent-ulf-c142="" value="speaking">Speaking</option>
                                            </select><small _ngcontent-ulf-c142="">Question Type</small></div>
                                        </div>
                                        <div _ngcontent-ulf-c142="" class="row pb-3">
                                            <div _ngcontent-ulf-c142="" class="col-md-11 d-flex justify-content-center">
                                                <button _ngcontent-ulf-c142="" type="button"
                                                    class="btn btn-primary mx-5">Go</button><button _ngcontent-ulf-c142=""
                                                        type="button" class="btn btn-outline-danger mx-2">Clear Filters</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-ulf-c142="" class="row mt-2 container-fluid" >
                            <div _ngcontent-ulf-c142="" class="col-md-12 stretch-card" >
                                <div _ngcontent-ulf-c142="" class="card">
                                    <div _ngcontent-ulf-c142="" class="card-body" >
                                        <h6 _ngcontent-ulf-c142="" class="pb-2"><strong _ngcontent-ulf-c142="">Questions
                                            Table</strong></h6>
                                        <div _ngcontent-ulf-c142="" class="template-body tab-bg">
                                            <div _ngcontent-ulf-c142="" class="table-responsive">
                                                <table _ngcontent-ulf-c142="" datatable=""
                                                    class="table table-bordered row-border hover">
                                                    <thead _ngcontent-ulf-c142="" class="text-center"
                                                        style={{ backgroundColor: '#D0D2D5' }}>
                                                        <tr _ngcontent-ulf-c142="">
                                                            <th _ngcontent-ulf-c142="">S.No</th>
                                                            <th _ngcontent-ulf-c142="">ID</th>
                                                            <th _ngcontent-ulf-c142="">Module</th>
                                                            <th _ngcontent-ulf-c142="">Chapter</th>
                                                            <th _ngcontent-ulf-c142="">Questions</th>
                                                            <th _ngcontent-ulf-c142="">Difficulty</th>
                                                            <th _ngcontent-ulf-c142="">Question Type</th>
                                                            <th _ngcontent-ulf-c142="">Reference</th>
                                                            <th _ngcontent-ulf-c142="">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody _ngcontent-ulf-c142="" class="text-center"></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div _ngcontent-ulf-c142=""></div>
                                </div>
                                <p _ngcontent-ulf-c142="" id="open-deleteSection"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
