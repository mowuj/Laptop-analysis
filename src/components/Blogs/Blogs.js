import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='context-api'>
                <h4>What is context API does?</h4>
                <p>The context API is a React structure that  enables
                    to exchange unique  details and <br/> assists in solving 
                    prop-drilling,This is alternative to prop  drilling
                    or moving <br/> props from grandparent to child to parent,
                    and so on,Context is <br/> also touted as an easier,
                </p>
            </div>
            <div className='block-inline'>
                <h4>Deference between inline block and inline block elements?</h4>
                <div>
                    <h5>Inline elements</h5>
                    <ul>
                    <li>Left Right margins and padding are allowed,but not top.
                        and bottom

                    </li>
                    <li>
                        can not have width and height set.
                    </li>
                    <li>
                        Allow other elements to sit to their left and right.
                    </li>
                </ul>
                </div>
                <div>
                    <h5>Inline block elements</h5>
                    <ul>
                        <li>
                            Allow other elements to sit to their left and right.
                        </li>
                        <li>
                            It Respects top and bottom margins and padding.
                        </li>
                        <li>
                            It respects height and width.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;