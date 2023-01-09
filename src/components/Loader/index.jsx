import React from 'react'
import { Spinner } from 'react-bootstrap';
import './styles.scss'

function LoaderMain() {
    return (
        <div className="loadingMain">
            <div class="loader" />
        </div>
    );
}

export default LoaderMain;