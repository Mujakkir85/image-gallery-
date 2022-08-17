import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand fs-4 text fw-bold " href="#">Image Gellary</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 p-4 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active fs-5 me-2" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fs-5 me-2" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fs-5 me-2" aria-current="page" href="#">Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fs-5" aria-current="page" href="#">Contact</a>
                            </li>

                        </ul>
                        <div class="d-flex" role="search">
                            <button type="button" class="btn btn-dark me-2 ps-4 pe-4 py-3">GET IN TOUCH</button>
                        </div>
                    </div>
                </div>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L17.1,261.3C34.3,267,69,277,103,261.3C137.1,245,171,203,206,197.3C240,192,274,224,309,213.3C342.9,203,377,149,411,154.7C445.7,160,480,224,514,245.3C548.6,267,583,245,617,234.7C651.4,224,686,224,720,192C754.3,160,789,96,823,106.7C857.1,117,891,203,926,218.7C960,235,994,181,1029,176C1062.9,171,1097,213,1131,229.3C1165.7,245,1200,235,1234,234.7C1268.6,235,1303,245,1337,250.7C1371.4,256,1406,256,1423,256L1440,256L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>
        </Container>
    );
};

export default Header;