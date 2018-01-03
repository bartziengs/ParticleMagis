import React, { Component } from 'react';

/**
 * @author Bart Ziengs 3-01-2017
 * Footer component for the entire website
 */

class FooterComponent extends Component {

    render = () => {
        return(
        <footer class="footer">
        <div class="container">
          <p>Place sticky footer content here.</p>
        </div>
      </footer>
    )
    };

}

export default FooterComponent;