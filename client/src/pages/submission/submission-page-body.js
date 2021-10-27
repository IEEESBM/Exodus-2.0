import { Form } from 'rsuite';

function SubmissionPageBody() {
    return (
        // <section className='submission-page-body'>
        //     <article>
        //         <Form layout="horizontal">
        //             <Form.Group controlId="name-6">
        //                 <Form.ControlLabel>Code Link</Form.ControlLabel>
        //                 <Form.Control name="name" />
        //             </Form.Group>
        //             <Form.Group controlId="name-6">
        //                 <Form.ControlLabel>Website Link</Form.ControlLabel>
        //                 <Form.Control name="name" />
        //             </Form.Group>
        //             <Form.Group controlId="name-6">
        //                 <Form.ControlLabel>Description</Form.ControlLabel>
        //                 <Form.Control name="name" />
        //             </Form.Group>
        //         </Form>
        //     </article>
        // </section>
        <section className='submission-page-body'>
            <h1>Flat Responsive Form</h1>
            <div class="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
                <form action="/?page_id=143#wpcf7-f156-p143-o1" method="post" class="wpcf7-form" novalidate="novalidate">
                    <div >
                        <input type="hidden" name="_wpcf7" value="156"/>
                            <input type="hidden" name="_wpcf7_version" value="3.7.2"/>
                                <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f156-p143-o1"/>
                                        <input type="hidden" name="_wpnonce" value="d1da331d93"/>
                                        </div>
                                        <p>
                                            <span class="wpcf7-form-control-wrap Name">
                                                <input type="text" name="Name" value="" size="40" class="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name"/>
                                            </span>
                                            <span class="wpcf7-form-control-wrap Email">
                                                <input type="email" name="Email" size="40" class="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email"/>
                                            </span>
                                            <span class="wpcf7-form-control-wrap Subject flat">
                                                <select name="Subject" class="indent wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false">
                                                    <option value="General">General</option>
                                                    <option value="Booking">Booking</option>
                                                </select>
                                            </span>
                                            <span class="wpcf7-form-control-wrap Message">
                                                <textarea name="Message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message"></textarea>
                                            </span>
                                            <input type="submit" value="Send" class="wpcf7-form-control wpcf7-submit btn" />
                                                <img class="ajax-loader" src="http://www.jordancundiff.com/wp-content/plugins/contact-form-7/images/ajax-loader.gif" alt="Sending ..."  />
                                            </p>
                                                <div class="wpcf7-response-output wpcf7-display-none">
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                    );
}

                                    export default SubmissionPageBody;