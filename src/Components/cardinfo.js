import React from 'react'

const CardInfo = ({image, title, description}) => {
    return (
        <div className="col-sm-4">
            <div className="list-item list-overlay r mb-3">
                <div className="media media-4x3">
                    <a
                        className="ajax media-content"
                        style={{ backgroundImage: `url(${image})` }}
                    ></a>
                    <div className="media-action"></div>
                </div>
                <div class="list-content p-5">
                    <div className="list-body">
                        <a
                            className="list-title title ajax h4 font-weight-bold"
                        > {title} </a>
                        <a className="list-subtitle d-block text-muted subtitle ajax h-1x"
                        >{description}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;