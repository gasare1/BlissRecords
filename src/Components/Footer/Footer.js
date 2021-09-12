import React from 'react'
import { MainFooter } from '../styled-components/navbarelements'
import { ImFacebook, ImYoutube2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'
import { GiSwordsPower } from 'react-icons/gi'


import './footer.css'
function Footer() {
    return (
        <div>
            <MainFooter>
                <footer>
                    <div class="">
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <h3>Site Map</h3>
                                <ul class="list-unstyled three-column">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Company</li>
                                </ul>
                                <ul class="list-unstyled socila-list">
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <h3>latest Albums</h3>
                                <div class="media">
                                    <a href="#" class="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" class="media-object" />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">New Album</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div class="media">
                                    <a href="#" class="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" class="media-object" />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">New Album</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div class="media">
                                    <a href="#" class="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" class="media-object" />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">New Album</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4">
                                <h3>Our Music</h3>
                                <img class="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                                <img class="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                                <img class="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                                <img class="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                            </div>

                        </div>
                    </div>
                    <div class="copyright text-center">
                        <span>Copyright &copy; 2021 </span><span>Bliss Records</span>
                    </div>
                </footer>



            </MainFooter>

        </div>
    )
}

export default Footer
