import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function upload() {
    return (
        <>
            
            <div  class="layout-wrapper layout-content-navbar-container">
                <div class="layout-container">
                     <Sidebar />
                    <div class="col-md-11">
                        <div class="m-4">
                            <div class="card">
                                <div class="card-body m-2">
                                    <div class="row pb-3">
                                        <div class="col-md-6">
                                            <h6 ><strong >Upload Questions</strong></h6>
                                        </div>
                                        <div class="col-md-6 d-flex flex-row justify-content-end">
                                            <button type="button"
                                            class="btn btn-warning">Download
                                            Format</button>
                                            </div>
                                    </div>
                                    <form novalidate="" class="forms-sample ng-pristine ng-invalid ng-touched">
                                        <div class="row form-group">
                                            <div class="col-md-6"><label >Subject</label><select
                                                name="subject" formcontrolname="subject"
                                                class="form-control default-input ng-pristine ng-invalid ng-touched">
                                                <option value="" selected="" disabled="">-- Select Subject --</option>
                                                <option value="l81c2xlj">ZOHO_1_Verbal</option>
                                                <option value="l88nu6lx">Zoho _ C Fundamentals</option>
                                                <option value="l88wfgw1">Zoho Advanced Programming </option>
                                                <option value="l89x3921">Zoho basic programming</option>
                                                <option value="l8e4c1yf">Technical Practice</option>
                                                <option value="l8n1iaps">Dynamic Programming</option>
                                                <option value="l8n9ullv">Aptitude </option>
                                                <option value="l8ncahe3">verbal</option>
                                                <option value="l8nfqfdt">Technical MCQ</option>
                                            </select></div>
                                            <div class="col-md-6"><label >Chapter</label><select
                                                name="chapter" formcontrolname="chapter"
                                                class="form-control default-input ng-untouched ng-pristine ng-invalid">
                                                <option value="" selected="" disabled="">-- Select Chapter --</option>
                                            </select></div>
                                        </div>
                                        <div class="row form-group">
                                            <div class="col-md-6"><label 
                                                for="exampleInputPassword1">Question File</label><br /><input
                                                    type="file" required="" id="userFile" formcontrolname="questions_file"
                                                    class="form-control ng-untouched ng-pristine ng-invalid" />
                                            </div>
                                        </div>
                                        <div class="mt-3 text-center"><button type="submit"
                                            class="btn btn-primary mr-2 mb-2 mb-md-0" disabled="">Upload Questions</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
