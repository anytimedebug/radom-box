import React from 'react';

const RandomFooter = ({employeeCount, colCount, onChange, onShuffle, onFetch}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group row">
                        <label htmlFor="employeeCount" className="col-sm-6 col-form-label">총 인원 : </label>
                        <div className="col-sm-6">
                            <input type="text" readOnly className="form-control-plaintext" id="employeeCount"
                                   value={employeeCount}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group row">
                        <label htmlFor="colCount" className="col-sm-6 col-form-label">열 개수 : </label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" id="colCount"
                                   value={colCount} onChange={onChange}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary btn-lg btn-block" onClick={onShuffle}>결과보기</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="file" className="form-control" onChange={onFetch}/>
                </div>
            </div>
        </div>
    );
};

export default RandomFooter;