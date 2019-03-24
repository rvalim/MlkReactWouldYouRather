import React from 'react'
import {Alert} from 'react-bootstrap'

export function formatPercentage(value, total){
    return `${((value / total) * 100).toFixed(2)} %`
}

export function formatStatisticsResult(answer, votes, total) {
    return (
        <Alert variant='info'>
            Would you rather {answer}
            <div>
                <strong>{formatPercentage(votes, total)}</strong>
                ({votes} out of {total} votes)
            </div>
        </Alert>
    )
}