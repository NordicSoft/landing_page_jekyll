---
layout: page
permalink: /contact/
menu: false
---
<div class="container">
    <div class="start-conversation">
        <svg height="48" width="48">
            <circle cx="24" cy="24" r="12" fill="black" />
        </svg>
        <p class="h2-text">start a conversation</p>
    </div>
</div>

<section id="contact-form">
    <div class="container">

        <div class="contact-cols">

            <div class="contact-col">
                <h1 class="contact-title">contact</h1>
            </div>
            <div class="contact-col">
                <form class="contact-form" method="POST" target="_blank">
                    <div class="form-cols">
                        <div class="form-col">
                            <div class="form-group">
                                <label for="exampleInputName">Name</label>
                                <br>
                                <input type="text" name="name" class="form-control" placeholder="Your full name"
                                    required="required">
                            </div>
                            <label for="exampleInputName">I need help with</label>
                            <br>
                            <select class="form-control" name="platform" required="required">
                                <option>Design - Web /Mobile App</option>
                                <option>Gitlab</option>
                                <option>Bitbucket</option>
                            </select>
                        </div>
                        <div class="form-col">

                            <div class="form-group">
                                <label for="exampleInputEmail1" required="required">Email</label>
                                <br>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Your email">
                            </div>
                            <label for="exampleFormControlSelect1">My budget</label>
                            <br>
                            <select class="form-control" id="exampleFormControlSelect1" name="platform"
                                required="required">
                                <option>$2,500 - $5,000</option>
                                <option>Gitlab</option>
                                <option>Bitbucket</option>
                            </select>

                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="get-in-touch-btn">Get in touch</button>
                </form>
            </div>

        </div>

    </div>
</section>