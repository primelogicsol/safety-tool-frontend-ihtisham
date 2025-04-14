import { useState, ChangeEvent } from 'react'

export default function QuantityInput() {
    const [value, setValue] = useState<number>(1)

    const handleUpClick = () => {
        setValue(value + 1)
    }

    const handleDownClick = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setValue(newValue);
        }
    }

    return (
        <>
            <div className="quantity">
                <div className="input-group bootstrap-touchspin">
                    <span className="input-group-addon bootstrap-touchspin-prefix" />
                    <input 
                        className="quantity-spinner form-control" 
                        type="text" 
                        value={value} 
                        onChange={handleInputChange} 
                    />
                    <span className="input-group-addon bootstrap-touchspin-postfix" />
                    <span className="input-group-btn-vertical">
                        <button className="btn btn-default bootstrap-touchspin-up" type="button" onClick={handleUpClick}>
                            <i className="glyphicon glyphicon-chevron-up" />
                        </button>
                        <button className="btn btn-default bootstrap-touchspin-down" type="button" onClick={handleDownClick}>
                            <i className="glyphicon glyphicon-chevron-down" />
                        </button>
                    </span>
                </div>
            </div>
        </>
    )
}