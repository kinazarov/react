import React from 'react'

function MySelect({options, defaultValue, value, onChange, splitter}) {
    return (
        <div>
            {
                splitter ?
                <hr style={{margin: '15px 0'}}/>
                : ''
            }
            <select value={value} onChange={event => onChange(event.target.value)}>
                <option value="" key="defaultOption" disabled={true}>{defaultValue}</option>
                {
                    options.map(
                        option => <option key={option.value} value={option.value}>{option.title}</option>
                    )
                }
            </select>
        </div>
    );
}


export default MySelect;