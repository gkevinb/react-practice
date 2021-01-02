// import React from 'react'


// // Functional compontent: A function that returns something
// function Header() {
//     return (
//         <div className="header">
//             <h1 className="header__title">This is the header</h1>
//             <h1 className="header__user">Kev is signed in</h1>
//         </div>
//     )
// }

// export default Header


import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Hello Header!</h1>
            </div>
        )
    }
}

export default Header