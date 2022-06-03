{% include cookie-consent.html %}

<div class="container">
    <div class="start-conversation">
        <p class="h2-text">start a conversation</p>
    </div>
</div>

<section id="contact-form">
    <div class="container">

        <div class="contact-cols">

            <div class="contact-col">
                <h1 class="contact-title">Contact</h1>
            </div>
            <div class="contact-col">

<form
  action="https://formspree.io/f/{{ site.env.SOME_KEY }}"
  method="POST"
>                    <div class="form-cols">
                        <div class="form-col">
                            <div class="form-group">
                                <label for="exampleInputName">Name</label>
                                <br>
                                <input type="text" name="name" class="form-control" placeholder="Your full name"
                                    required="required">
                                    <div class="form-group">
                                <label for="exampleInputEmail1" required="required">Email</label>
                                <br>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Your email">
                            </div>
                            </div>
                        </div>
                        <div class="form-col form-col-select">
                              <label for="exampleInputName">I need help with</label>
                            <br>
                            <select class="form-control select-contact" name="platform" required="required">
                                <option>Design - Website or Landing Page</option>
                                <option>Illustration & Branding</option>
                                <option>Development - Frontend/Backend</option>
                                <option>Design & Development - Ecommerce</option>
                            </select>
                            <label for="exampleFormControlSelect1">My budget</label>
                            <br>
                            <select class="form-control select-contact" id="exampleFormControlSelect1" name="platform"
                                required="required">
                                <option>$2,500 - $5,000</option>
                                <option>$5,000 - $15,000</option>
                                <option>$15,000 - $25,000</option>
                                <option>Over $25,000</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="get-in-touch-btn">Get in touch</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</section>
