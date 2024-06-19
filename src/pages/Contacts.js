const Contacts = () => {
    return (
        <main class="section">
            <div class="container">
                    <h1 class="title-1">Contacts</h1>

                    <ul class="content-list">
                        <li class="content-list__item">
                            <h2 class="title-2">Location</h2>
                            <p>Vladivostok, Russia</p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">WhatsApp</h2>
                            <p><a href="tel:+79940085107">+7 (994) 008-51-07</a></p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Telegram</h2>
                            <p><a href="https://t.me/bev_x">@bev_x</a></p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">moonlight-dev@mail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main>
    );
}
 
export default Contacts;