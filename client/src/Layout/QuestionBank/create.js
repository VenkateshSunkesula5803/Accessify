import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function ManageVendor() {
    return (
      <>
        <div class="layout-wrapper layout-content-navbar-modal-dialog mr-2">
          <div class="layout-container">
            <Sidebar />
            <div class="layout-page">
              <Header />
              <div class="content-wrapper">
              <div class="layout-wrapper layout-content-navbar-container">
        <div  class="layout-container">
          <div  class="row justify-content-center">
            <div _ngcontent-llm-c141="" class="col-md-11 ">
              <div _ngcontent-llm-c141="" class="card">
                <div _ngcontent-llm-c141="" class="card-body">
                  <div _ngcontent-llm-c141="" class="card-title"><strong >Create Question</strong>
                  </div>
                  <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
                    _ngcontent-llm-c141="">Select Question Type <span _ngcontent-llm-c141=""
                      class="text-danger">*</span></strong></label><select _ngcontent-llm-c141="" name="question_type"
                        id="" class="form-control ng-valid ng-touched ng-dirty">
                      <option _ngcontent-llm-c141="" value="" selected="" disabled="">-- Select Question Type --</option>
                      <option _ngcontent-llm-c141="" value="single_option">Single Correct Option </option>
                      <option _ngcontent-llm-c141="" value="multi_option">Multi Correct Option </option>
                      <option _ngcontent-llm-c141="" value="multi_choice_partial">Multi Correct Option With Partial
                        Marking </option>
                      <option _ngcontent-llm-c141="" value="fill_in_blanks">Fill In The Blanks </option>
                      <option _ngcontent-llm-c141="" value="true_or_false">True Or False </option>
                      <option _ngcontent-llm-c141="" value="writing">Writing </option>
                      <option _ngcontent-llm-c141="" value="speaking">Speaking </option>
                    </select></div>
                  <form ngcontent-llm-c141="" novalidate="" action="" class="ng-pristine ng-invalid ng-touched">
                    <p _ngcontent-llm-c141="">Note: <em _ngcontent-llm-c141=""><strong _ngcontent-llm-c141="">Single
                      Option Question</strong> will have a minimum of 3 options and a maximum of 5 options. <br
                        _ngcontent-llm-c141="" />One of the option will be the correct answer for this type of
                      Question</em></p>
                    <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
                      _ngcontent-llm-c141="">Subjects <span _ngcontent-llm-c141=""
                        class="text-danger">*</span></strong></label><select _ngcontent-llm-c141="" name="module"
                          formcontrolname="module_id" class="form-control ng-untouched ng-pristine ng-invalid">
                        <option _ngcontent-llm-c141="" value="" selected="" disabled="">-- Select Subject --</option>
                        <option _ngcontent-llm-c141="" value="l81c2xlj">Zoho_1_verbal </option>
                        <option _ngcontent-llm-c141="" value="l88nu6lx">Zoho _ C Fundamentals </option>
                        <option _ngcontent-llm-c141="" value="l88wfgw1">Zoho Advanced Programming </option>
                        <option _ngcontent-llm-c141="" value="l89x3921">Zoho Basic Programming </option>
                        <option _ngcontent-llm-c141="" value="l8e4c1yf">Technical Practice </option>
                      </select></div>
                    <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
                      _ngcontent-llm-c141="">Chapters <span _ngcontent-llm-c141=""
                        class="text-danger">*</span></strong></label><select _ngcontent-llm-c141="" name="type"
                          formcontrolname="chapter_id" class="form-control ng-untouched ng-pristine ng-invalid">
                        <option _ngcontent-llm-c141="" value="" selected="">-- Select Chapter --</option>
                      </select></div>
                    <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
                      _ngcontent-llm-c141="">Difficulty <span _ngcontent-llm-c141=""
                        class="text-danger">*</span></strong></label>
                      <div _ngcontent-llm-c141="" class="row">
                        <div _ngcontent-llm-c141="" class="col-md-4 col-12">
                          <input class="form-control"
                            type="text" id="_name" name="_name" placeholder="Reference Name" />Easy</div>
                        <div _ngcontent-llm-c141="" class="col-md-4 col-12">
                          <input class="form-control"
                            type="text" id="_name" name="_name" placeholder="Reference Name" />Medium</div>
                        <div _ngcontent-llm-c141="" class="col-md-4 col-12">
                          <input class="form-control"
                            type="text" id="_name" name="_name" placeholder="Reference Name" />Difficulty</div>
                      </div>
                    </div>
                    <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
                      _ngcontent-llm-c141="">Reference</strong></label><input class="form-control"
                        type="text" id="_name" name="_name" placeholder="Reference Name" /></div>
                    <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
                      _ngcontent-llm-c141="">Question <span _ngcontent-llm-c141=""
                        class="text-danger">*</span></strong></label>

                      <div _ngcontent-llm-c141="" class="form-group pt-2"><label _ngcontent-llm-c141="" for=""><strong
                        _ngcontent-llm-c141="">Question Image</strong></label><br ngcontent-llm-c141="" /><input class="form-control"
                          type="text" id="_name" name="_name" placeholder="Reference Name" /><label
                            _ngcontent-llm-c141="" for="question_image" class="btn btn-outline-primary">Choose Image</label>
                      </div>
                      <div _ngcontent-llm-c141="" class="form-group"><button _ngcontent-llm-c141="" type="button"
                        class="btn btn-primary">Insert Image</button></div>
                    </div>
                    <div _ngcontent-llm-c141="" formarrayname="options"
                      class="form-group ng-untouched ng-pristine ng-invalid"></div>
                    <div _ngcontent-llm-c141="" class="mb-3 ng-untouched ng-pristine ng-invalid"><label
                      _ngcontent-llm-c141="" for=""><strong _ngcontent-llm-c141="">Option 1</strong></label><br
                        _ngcontent-llm-c141="" />
                      <editor _ngcontent-llm-c141="" name="" formcontrolname="option" _nghost-llm-c92=""
                        class="ng-untouched ng-pristine ng-invalid"><textarea
                          id="tiny-angular_464347196291683545107350" style={{
                            display: 'none'
                          }}></textarea>
                      <div role="application" class="tox tox-tinymce" aria-disabled="false"
                        style={{ visibility: 'hidden', height: '300px'}}>
                        <div class="tox-editor-container">
                          <div data-alloy-vertical-dir="toptobottom" class="tox-editor-header">
                            <div role="menubar" data-alloy-tabstop="true" class="tox-menubar"><button
                              aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                              data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                              aria-expanded="false" style={{ userSelect: 'none'}}><span
                                class="tox-mbtn__select-label">Edit</span>
                              <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                              </svg></div>
                            </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                              data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                              aria-expanded="false" style={{ userSelect: 'none'}}><span
                                class="tox-mbtn__select-label">View</span>
                                <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                                </svg></div>
                              </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                                data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                                aria-expanded="false" style={{ userSelect: 'none'}}><span
                                  class="tox-mbtn__select-label">Insert</span>
                                <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                                </svg></div>
                              </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                                data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                                aria-expanded="false" style={{ userSelect: 'none'}}><span
                                  class="tox-mbtn__select-label">Format</span>
                                <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                                </svg></div>
                              </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                                data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                                aria-expanded="false" style={{ userSelect: 'none'}}><span
                                  class="tox-mbtn__select-label">Table</span>
                                <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                                </svg></div>
                              </button></div>
                            <div role="group" class="tox-toolbar-overlord" aria-disabled="false">
                              <div role="group" class="tox-toolbar__primary">
                                <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                                  class="tox-toolbar__group"><button aria-label="Undo" title="Undo" type="button"
                                    tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span
                                      class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                        focusable="false">

                                      </svg></span></button><button aria-label="Redo" title="Redo" type="button"
                                        tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span
                                          class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                            focusable="false">

                                      </svg></span></button></div>
                                <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                                  class="tox-toolbar__group"><button title="Blocks" aria-label="Blocks"
                                    aria-haspopup="true" type="button" tabindex="-1" unselectable="on"
                                    class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false"
                                    style={{ userSelect: 'none'}}><span class="tox-tbtn__select-label">Paragraph</span>
                                    <div class="tox-tbtn__select-chevron"><svg width="10" height="10"
                                      focusable="false">

                                    </svg></div>
                                  </button></div>
                                <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                                  class="tox-toolbar__group"><button aria-label="Bold" title="Bold" type="button"
                                    tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                      class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                        focusable="false">

                                      </svg></span></button><button aria-label="Italic" title="Italic" type="button"
                                        tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                          class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                            focusable="false">

                                      </svg></span></button></div>
                                <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                                  class="tox-toolbar__group"><button aria-label="Align left" title="Align left"
                                    type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                                    aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                      height="24" focusable="false">

                                    </svg></span></button><button aria-label="Align center" title="Align center"
                                      type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                                      aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                        height="24" focusable="false">

                                      </svg></span></button><button aria-label="Align right" title="Align right"
                                        type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                                        aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                          height="24" focusable="false">

                                        </svg></span></button><button aria-label="Justify" title="Justify" type="button"
                                          tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                            class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                              focusable="false">

                                      </svg></span></button></div>
                                <div role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                                  class="tox-toolbar__group"><button aria-label="More..." title="More..."
                                    aria-haspopup="true" type="button" tabindex="-1" data-alloy-tabstop="true"
                                    class="tox-tbtn" aria-expanded="false"><span
                                      class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                        focusable="false">

                                      </svg></span></button></div>
                              </div>
                            </div>
                            <div class="tox-anchorbar"></div>
                          </div>
                          <div class="tox-sidebar-wrap">
                            <div class="tox-edit-area"><iframe id="tiny-angular_464347196291683545107350_ifr"
                              frameborder="0" allowtransparency="true" title="Rich Text Area"
                              class="tox-edit-area__iframe"></iframe></div>
                            <div role="complementary" class="tox-sidebar">
                              <div data-alloy-tabstop="true" tabindex="-1"
                                class="tox-sidebar__slider tox-sidebar--sliding-closed" style={{ width: '0px'}}>
                                <div class="tox-sidebar__pane-container"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tox-statusbar">
                          <div class="tox-statusbar__text-container">
                            <div role="navigation" data-alloy-tabstop="true" class="tox-statusbar__path"
                              aria-disabled="false">
                              <div role="button" data-index="0" tab-index="-1" aria-level="1" tabindex="-1"
                                class="tox-statusbar__path-item" aria-disabled="false">p</div>
                            </div><button type="button" tabindex="-1" data-alloy-tabstop="true"
                              class="tox-statusbar__wordcount">0 words</button><span
                                class="tox-statusbar__branding"><a
                                  href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5"
                                  rel="noopener" target="_blank" tabindex="-1" aria-label="Powered by Tiny">Powered by
                                Tiny</a></span>
                          </div>
                          <div title="Resize" data-alloy-tabstop="true" tabindex="-1"
                            class="tox-statusbar__resize-handle"><svg width="10" height="10" focusable="false">
                              <g fill-rule="nonzero">

                              </g>
                            </svg></div>
                        </div>
                        <div aria-hidden="true" class="tox-throbber" style={{ display: 'none'}}></div>
                      </div>
                    </editor>
                    <div _ngcontent-llm-c141="" class="form-group row pt-2">
                      <div _ngcontent-llm-c141="" class="col-md-10"><label _ngcontent-llm-c141="" for=""><strong
                        _ngcontent-llm-c141="">Option 1 Image</strong></label><br _ngcontent-llm-c141="" /><input class="form-control"
                          type="text" id="_name" name="_name" placeholder="Reference Name" /><label
                            _ngcontent-llm-c141="" class="btn btn-outline-primary" for="option1image">Choose
                          Image</label></div>
                      <div _ngcontent-llm-c141="" class="col-md-2"><label _ngcontent-llm-c141="" for=""></label><br
                        _ngcontent-llm-c141="" /><button _ngcontent-llm-c141="" type="button"
                          class="btn btn-danger float-right" disabled="">Delete Option</button></div>
                    </div>
                    <div _ngcontent-llm-c141="" class="form-group"><button _ngcontent-llm-c141="" type="button"
                      class="btn btn-primary">Insert Image</button></div>
                </div>
                <div _ngcontent-llm-c141="" class="mb-3 ng-untouched ng-pristine ng-invalid"><label
                  _ngcontent-llm-c141="" for=""><strong _ngcontent-llm-c141="">Option 2</strong></label>
                  <editor _ngcontent-llm-c141="" name="" formcontrolname="option" _nghost-llm-c92=""
                    class="ng-untouched ng-pristine ng-invalid"><textarea
                      id="tiny-angular_833201975301683545107456" style={{
                        display: 'none',
                          ariaHidden: 'true'}}></textarea>
                  <div role="application" class="tox tox-tinymce" aria-disabled="false"
                    style={{ visibility: 'hidden', height: '300px'}}>
                    <div class="tox-editor-container">
                      <div data-alloy-vertical-dir="toptobottom" class="tox-editor-header">
                        <div role="menubar" data-alloy-tabstop="true" class="tox-menubar"><button
                          aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                          data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                          aria-expanded="false" style={{ userSelect: 'none'}}><span
                            class="tox-mbtn__select-label">Edit</span>
                          <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                          </svg></div>
                        </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                          data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                          aria-expanded="false" style={{ userSelect: 'none'}}><span
                            class="tox-mbtn__select-label">View</span>
                            <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                            </svg></div>
                          </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                            data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                            aria-expanded="false" style={{ userSelect: 'none'}}><span
                              class="tox-mbtn__select-label">Insert</span>
                            <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                            </svg></div>
                          </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                            data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                            aria-expanded="false" style={{ userSelect: 'none'}}><span
                              class="tox-mbtn__select-label">Format</span>
                            <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                            </svg></div>
                          </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                            data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                            aria-expanded="false" style={{ userSelect: 'none'}}><span
                              class="tox-mbtn__select-label">Table</span>
                            <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">

                            </svg></div>
                          </button></div>
                        <div role="group" class="tox-toolbar-overlord" aria-disabled="false">
                          <div role="group" class="tox-toolbar__primary">
                            <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                              class="tox-toolbar__group"><button aria-label="Undo" title="Undo" type="button"
                                tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span
                                  class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                    focusable="false">

                                  </svg></span></button><button aria-label="Redo" title="Redo" type="button"
                                    tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span
                                      class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                        focusable="false">

                                  </svg></span></button></div>
                            <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                              class="tox-toolbar__group"><button title="Blocks" aria-label="Blocks"
                                aria-haspopup="true" type="button" tabindex="-1" unselectable="on"
                                class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false"
                                style= {{userselect: 'none'}}> <span class="tox-tbtn__select-label">Paragraph</span>
                              <div class="tox-tbtn__select-chevron"><svg width="10" height="10"
                                focusable="false">

                              </svg></div>
                            </button></div>
                          <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                            class="tox-toolbar__group"><button aria-label="Bold" title="Bold" type="button"
                              tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                  focusable="false">

                                </svg></span></button><button aria-label="Italic" title="Italic" type="button"
                                  tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                    class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                      focusable="false">

                                </svg></span></button></div>
                          <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                            class="tox-toolbar__group"><button aria-label="Align left" title="Align left"
                              type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                              aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                height="24" focusable="false">

                              </svg></span></button><button aria-label="Align center" title="Align center"
                                type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                                aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                  height="24" focusable="false">

                                </svg></span></button><button aria-label="Align right" title="Align right"
                                  type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                                  aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                    height="24" focusable="false">

                                  </svg></span></button><button aria-label="Justify" title="Justify" type="button"
                                    tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                      class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                        focusable="false">

                                </svg></span></button></div>
                          <div role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                            class="tox-toolbar__group"><button aria-label="More..." title="More..."
                              aria-haspopup="true" type="button" tabindex="-1" data-alloy-tabstop="true"
                              class="tox-tbtn" aria-expanded="false"><span
                                class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                  focusable="false">

                                </svg></span></button></div>
                        </div>
                      </div>
                      <div class="tox-anchorbar"></div>
                    </div>
                    <div class="tox-sidebar-wrap">
                      <div class="tox-edit-area"><iframe id="tiny-angular_833201975301683545107456_ifr"
                        frameborder="0" allowtransparency="true" title="Rich Text Area"
                        class="tox-edit-area__iframe"></iframe></div>
                      <div role="complementary" class="tox-sidebar">
                        <div data-alloy-tabstop="true" tabindex="-1"
                          class="tox-sidebar__slider tox-sidebar--sliding-closed" style={{ width: '0px'}}>
                          <div class="tox-sidebar__pane-container"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tox-statusbar">
                    <div class="tox-statusbar__text-container">
                      <div role="navigation" data-alloy-tabstop="true" class="tox-statusbar__path"
                        aria-disabled="false">
                        <div role="button" data-index="0" tab-index="-1" aria-level="1" tabindex="-1"
                          class="tox-statusbar__path-item" aria-disabled="false">p</div>
                      </div><button type="button" tabindex="-1" data-alloy-tabstop="true"
                        class="tox-statusbar__wordcount">0 words</button><span
                          class="tox-statusbar__branding"><a
                            href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5"
                            rel="noopener" target="_blank" tabindex="-1" aria-label="Powered by Tiny">Powered by
                          Tiny</a></span>
                    </div>
                    <div title="Resize" data-alloy-tabstop="true" tabindex="-1"
                      class="tox-statusbar__resize-handle"><svg width="10" height="10" focusable="false">
                        <g fill-rule="nonzero">
                        </g>
                      </svg></div>
                  </div>
                  <div aria-hidden="true" class="tox-throbber" style={{ display: 'none'}}></div>
                </div>
              </editor>
              <div _ngcontent-llm-c141="" class="form-group row pt-2">
                <div _ngcontent-llm-c141="" class="col-md-10"><label _ngcontent-llm-c141="" for=""><strong
                  _ngcontent-llm-c141="">Option 2 Image</strong></label><br _ngcontent-llm-c141="" /><input class="form-control"
                    type="text" id="_name" name="_name" placeholder="Reference Name" /><label
                      _ngcontent-llm-c141="" class="btn btn-outline-primary" for="option2image">Choose
                    Image</label></div>
                <div _ngcontent-llm-c141="" class="col-md-2"><label _ngcontent-llm-c141="" for=""></label><br
                  _ngcontent-llm-c141="" /><button _ngcontent-llm-c141="" type="button"
                    class="btn btn-danger float-right" disabled="">Delete Option</button></div>
              </div>
              <div _ngcontent-llm-c141="" class="form-group"><button _ngcontent-llm-c141="" type="button"
                class="btn btn-primary">Insert Image</button></div>
            </div>
            <div _ngcontent-llm-c141="" class="mb-3 ng-untouched ng-pristine ng-invalid"><label
              _ngcontent-llm-c141="" for=""><strong _ngcontent-llm-c141="">Option 3</strong></label><br
                _ngcontent-llm-c141="" />
              <editor _ngcontent-llm-c141="" name="" formcontrolname="option" _nghost-llm-c92=""
                class="ng-untouched ng-pristine ng-invalid"><textarea
                  id="tiny-angular_35530068311683545107484" style={{
                    display: 'none',                    
                    ariaHidden:'true'}}></textarea>
              <div role="application" class="tox tox-tinymce" aria-disabled="false"
                style={{ visibility: 'hidden', height: '300px'}}>
                <div class="tox-editor-container">
                  <div data-alloy-vertical-dir="toptobottom" class="tox-editor-header">
                    <div role="menubar" data-alloy-tabstop="true" class="tox-menubar"><button
                      aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                      data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                      aria-expanded="false" style={{ userSelect: 'none'}}><span
                        class="tox-mbtn__select-label">Edit</span>
                      <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">
                      </svg></div>
                    </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                      data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                      aria-expanded="false" style={{ userSelect: 'none'}}><span
                        class="tox-mbtn__select-label">View</span>
                        <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">
                        </svg></div>
                      </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                        data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                        aria-expanded="false" style={{ userSelect: 'none'}}><span
                          class="tox-mbtn__select-label">Insert</span>
                        <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">
                          
                        </svg></div>
                      </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                        data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                        aria-expanded="false" style={{ userSelect: 'none'}}><span
                          class="tox-mbtn__select-label">Format</span>
                        <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">
                         
                        </svg></div>
                      </button><button aria-haspopup="true" role="menuitem" type="button" tabindex="-1"
                        data-alloy-tabstop="true" unselectable="on" class="tox-mbtn tox-mbtn--select"
                        aria-expanded="false" style={{ userSelect: 'none'}}><span
                          class="tox-mbtn__select-label">Table</span>
                        <div class="tox-mbtn__select-chevron"><svg width="10" height="10" focusable="false">
                          <path
                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z"
                            fill-rule="nonzero"></path>
                        </svg></div>
                      </button></div>
                    <div role="group" class="tox-toolbar-overlord" aria-disabled="false">
                      <div role="group" class="tox-toolbar__primary">
                        <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                          class="tox-toolbar__group"><button aria-label="Undo" title="Undo" type="button"
                            tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span
                              class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                focusable="false">
                                <path
                                  d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z"
                                  fill-rule="nonzero"></path>
                              </svg></span></button><button aria-label="Redo" title="Redo" type="button"
                                tabindex="-1" class="tox-tbtn tox-tbtn--disabled" aria-disabled="true"><span
                                  class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                    focusable="false">
                                <path
                                  d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z"
                                  fill-rule="nonzero"></path>
                              </svg></span></button></div>
                        <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                          class="tox-toolbar__group"><button title="Blocks" aria-label="Blocks"
                            aria-haspopup="true" type="button" tabindex="-1" unselectable="on"
                            class="tox-tbtn tox-tbtn--select tox-tbtn--bespoke" aria-expanded="false"
                            style={{ userSelect: 'none'}}><span class="tox-tbtn__select-label">Paragraph</span>
                            <div class="tox-tbtn__select-chevron"><svg width="10" height="10"
                              focusable="false">
                              
                            </svg></div>
                          </button></div>
                        <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                          class="tox-toolbar__group"><button aria-label="Bold" title="Bold" type="button"
                            tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                              class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                focusable="false">
                                <path
                                  d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z"
                                  fill-rule="evenodd"></path>
                              </svg></span></button><button aria-label="Italic" title="Italic" type="button"
                                tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                  class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                    focusable="false">
                                <path
                                  d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z"
                                  fill-rule="evenodd"></path>
                              </svg></span></button></div>
                        <div title="" role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                          class="tox-toolbar__group"><button aria-label="Align left" title="Align left"
                            type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                            aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                              height="24" focusable="false">
                              <path
                                d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                fill-rule="evenodd"></path>
                            </svg></span></button><button aria-label="Align center" title="Align center"
                              type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                              aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                height="24" focusable="false">
                                <path
                                  d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                  fill-rule="evenodd"></path>
                              </svg></span></button><button aria-label="Align right" title="Align right"
                                type="button" tabindex="-1" class="tox-tbtn" aria-disabled="false"
                                aria-pressed="false"><span class="tox-icon tox-tbtn__icon-wrap"><svg width="24"
                                  height="24" focusable="false">
                                  <path
                                    d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                    fill-rule="evenodd"></path>
                                </svg></span></button><button aria-label="Justify" title="Justify" type="button"
                                  tabindex="-1" class="tox-tbtn" aria-disabled="false" aria-pressed="false"><span
                                    class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                      focusable="false">
                                <path
                                  d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                                  fill-rule="evenodd"></path>
                              </svg></span></button></div>
                        <div role="toolbar" data-alloy-tabstop="true" tabindex="-1"
                          class="tox-toolbar__group"><button aria-label="More..." title="More..."
                            aria-haspopup="true" type="button" tabindex="-1" data-alloy-tabstop="true"
                            class="tox-tbtn" aria-expanded="false"><span
                              class="tox-icon tox-tbtn__icon-wrap"><svg width="24" height="24"
                                focusable="false">
                                <path
                                  d="M6 10a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm12 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2zm-6 0a2 2 0 00-2 2c0 1.1.9 2 2 2a2 2 0 002-2 2 2 0 00-2-2z"
                                  fill-rule="nonzero"></path>
                              </svg></span></button></div>
                      </div>
                    </div>
                    <div class="tox-anchorbar"></div>
                  </div>
                  <div class="tox-sidebar-wrap">
                    <div class="tox-edit-area"><iframe id="tiny-angular_35530068311683545107484_ifr"
                      frameborder="0" allowtransparency="true" title="Rich Text Area"
                      class="tox-edit-area__iframe"></iframe></div>
                    <div role="complementary" class="tox-sidebar">
                      <div data-alloy-tabstop="true" tabindex="-1"
                        class="tox-sidebar__slider tox-sidebar--sliding-closed" style={{ width: '0px'}}>
                        <div class="tox-sidebar__pane-container"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div aria-hidden="true" class="tox-throbber" style={{ display: 'none'}}></div>
              </div>
            </editor>
            <div _ngcontent-llm-c141="" class="form-group row pt-2">
              <div _ngcontent-llm-c141="" class="col-md-10"><label _ngcontent-llm-c141="" for=""><strong
                _ngcontent-llm-c141="">Option 3 Image</strong></label><br _ngcontent-llm-c141="" /><input class="form-control"
                  type="text" id="_name" name="_name" placeholder="Reference Name" /><label
                    _ngcontent-llm-c141="" class="btn btn-outline-primary" for="option3image">Choose
                  Image</label>
              </div>
              <div _ngcontent-llm-c141="" class="col-md-2"><label _ngcontent-llm-c141="" for=""></label><br
                _ngcontent-llm-c141="" /><button _ngcontent-llm-c141="" type="button"
                  class="btn btn-danger float-right" disabled="">Delete Option</button></div>
            </div>
            <div _ngcontent-llm-c141="" class="form-group"><button _ngcontent-llm-c141="" type="button"
              class="btn btn-primary">Insert Image</button></div>
          </div><button _ngcontent-llm-c141="" type="button" class="btn btn-info btn-block">Add
            Option</button>
        </form>
      </div>
      <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
        _ngcontent-llm-c141="">Correct Answer <span _ngcontent-llm-c141=""
          class="text-danger">*</span></strong></label><select _ngcontent-llm-c141="" name="correct"
            formcontrolname="correct" class="form-control ng-untouched ng-pristine ng-invalid">
          <option _ngcontent-llm-c141="" value="" selected="" disabled="">-- Select Correct Answer --
          </option>
          <option _ngcontent-llm-c141="" value="option_1"> Option 1</option>
          <option _ngcontent-llm-c141="" value="option_2"> Option 2</option>
          <option _ngcontent-llm-c141="" value="option_3"> Option 3</option>
        </select></div>
      <div _ngcontent-llm-c141="" class="form-group"><label _ngcontent-llm-c141="" for=""><strong
        _ngcontent-llm-c141="">Explanation <span _ngcontent-llm-c141=""
          class="text-danger">*</span></strong></label>
        <editor _ngcontent-llm-c141="" name="question" formcontrolname="question" _nghost-llm-c92="">

        </editor>
        <div _ngcontent-llm-c141="" class="form-group pt-2"><label _ngcontent-llm-c141="" for=""><strong
          _ngcontent-llm-c141="">Explanation Image</strong></label><br _ngcontent-llm-c141="" /><input class="form-control"
            type="text" id="_name" name="_name" placeholder="Reference Name" /><label
              _ngcontent-llm-c141="" for="explanation_image" class="btn btn-outline-primary">Choose
            Image</label></div>
        <div _ngcontent-llm-c141="" class="form-group"><button _ngcontent-llm-c141="" type="button"
          class="btn btn-primary">Insert Image</button></div>
      </div>
      <div _ngcontent-llm-c141="" class="form-group my-3"><button _ngcontent-llm-c141="" type="submit"
        class="btn btn-primary" disabled="">Create</button></div>
    </div >
              </div >
            </div >
          </div >
        </div >
      </div>
          </div>
          </div>
          </div>
          </>
    );
  }
  