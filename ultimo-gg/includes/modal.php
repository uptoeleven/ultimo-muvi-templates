<div class="modal" id="Modalform" tabindex="-1" role="dialog" aria-labelledby="ModalformLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close position-absolute" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-times" aria-hidden="true"></i></span>
            </button>
            <div id="modal-login" class="modal-body">
                <h3 class="font-bold text-uppercase mb-3">Log in SUB</h3>
                <h1 class="font-bold text-uppercase">Log in heading</h1>
                <div class="container-fluid my-4 px-0">
                    <div class="row no-gutter">
                        <div class="col-xs-8">
                            <div class="row no-gutter">
                                <div class="col-xs-4">
                                    <a class="modal-nav modal-nav-login d-block text-reset pb-3 active">
                                        <h5 class="text-uppercase">Log in</h5>
                                    </a>
                                </div>
                                <div class="col-xs-4">
                                    <a class="modal-nav modal-nav-sign-up d-block text-reset pb-3">
                                        <h5 class="text-uppercase">Sign up</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div class="form-group">
                        <label class="mb-2" for="InputUsername">Username</label>
                        <input type="username" class="form-control" id="InputUsername" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <label class="mb-2" for="InputPassword">Password</label>
                        <input type="password" class="form-control" id="InputPassword" placeholder="*********">
                    </div>
                    <div class="spacer1"></div>
                    <button type="submit" class="btn font-xbold text-uppercase">Submit</button>
                </form>
            </div>
            <div id="modal-sign-up" class="modal-body">
                <h1 class="font-bold text-uppercase">Sign Up</h1>
                <div class="container-fluid my-4 px-0">
                    <div class="row no-gutter">
                        <div class="col-xs-8">
                            <div class="row no-gutter">
                                <div class="col-xs-4">
                                    <a class="modal-nav modal-nav-login d-block text-reset pb-3">
                                        <h5 class="text-uppercase">Log in</h5>
                                    </a>
                                </div>
                                <div class="col-xs-4">
                                    <a class="modal-nav modal-nav-sign-up d-block text-reset pb-3 active">
                                        <h5 class="text-uppercase">Sign up</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div class="form-group">
                        <label class="mb-2" for="InputEmail">Email*</label>
                        <input type="username" class="form-control" id="InputEmail" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label class="mb-2" for="InputUsername">Username</label>
                        <input type="username" class="form-control" id="InputUsername" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <label class="mb-2" for="InputPassword">Password</label>
                        <input type="password" class="form-control" id="InputPassword" placeholder="*********">
                    </div>
                    <div class="form-group">
                        <label class="mb-2" for="InputPasswordConfirm">Confirm Password</label>
                        <input type="password" class="form-control" id="InputPasswordConfirm" placeholder="*********">
                    </div>
                    <div class="form-group">
                        <label class="mb-2" for="DateBirth">Date of Birth</label>
                        <input type="date" class="form-control" id="DateBirth" placeholder="*********">
                    </div>
                    <div class="checkbox mb-3 d-none">
                        <label>
                            <input type="checkbox"> <h5 class="form-text ml-3">Disclaimer message can go here to let everyone know you guys protect their information etc.</h5>
                        </label>
                    </div>
                    <label class="checkbox-container d-block position-relative mb-3">
                        <input class="position-absolute" type="checkbox">
                        <span class="checkmark position-absolute"></span>
                        <h5 class="form-text position-absolute">Disclaimer message can go here to let everyone know you guys protect their information etc.</h5>
                    </label>
                    <button type="submit" class="btn font-xbold text-uppercase">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>