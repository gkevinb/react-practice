import React, { Component } from 'react'

export default class ItemDescription extends Component {
    render() {
        const {name, description } = this.props
        return (
        <div>
            <p>{name}</p>
            <p><i>{description}</i></p>
        </div>
        )
    }
}





// import React from 'react'

// function ItemDescription({name, description}) {
//     return (
//         <div>
//             <p>{name}</p>
//             <p><i>{description}</i></p>
//         </div>
//     )
// }

// export default ItemDescription
