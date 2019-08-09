import React from 'react'
import '../styles/index.scss';
import Head from 'next/head';

export default class Index extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            nav: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav()
    {
        this.setState(state => ({
            nav: !this.state.nav
        }));
    }
    render() {
        return (
            <>
                <Head>
                    <script src="https://kit.fontawesome.com/321d8fb745.js"></script>
                </Head>
                <div className="main">
                    <h1 className="main__title">Stangholmen Fyr</h1>
                    <div className={'main__nav ' + (this.state.nav ? 'is-active' : '')}>
                        <a className="nav-toggle" onClick={this.toggleNav}>
                            <i className="fas fa-bars"></i>
                        </a>
                        <a href="/" className="main__nav-item hvr-shutter-out-horizontal">Konserter 2019</a>
                        <a href="/" className="main__nav-item hvr-shutter-out-horizontal">Restaurant</a>
                        <a href="/" className="main__nav-item hvr-shutter-out-horizontal">Kroa</a>
                        <a href="/" className="main__nav-item hvr-shutter-out-horizontal">Bryllup</a>
                        <a href="/" className="main__nav-item hvr-shutter-out-horizontal">Kontakt oss</a>
                        <a href="/" className="main__nav-item hvr-shutter-out-horizontal">Online Bestilling Risør Hotel</a>
                    </div>
                </div>
                <div className="display separator-top">
                    <div className="left-half has-image">
                        <img src="/static/island_concert.jpg" />
                    </div>
                    <div className="right-half">
                        <h1>Konserter 2019</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus tellus vel sapien faucibus faucibus id vitae libero. Integer porttitor efficitur ante quis gravida. Quisque tortor sapien, vulputate vitae sagittis vitae, sagittis eget mi. Donec non augue id tellus ultrices commodo a sit amet mi. Curabitur porttitor ut dui ac consectetur. Aenean maximus elementum orci, in placerat libero tincidunt nec. Vivamus massa velit, aliquet sed lacus a, placerat accumsan tortor. Vivamus volutpat, quam quis tincidunt viverra, lacus ligula euismod odio, ac malesuada tortor nibh quis est.</p>
                        <p>Sed tempor tempor viverra. Sed efficitur ligula quis facilisis fringilla. Sed fringilla odio et velit fringilla, at rutrum enim vulputate. Quisque nulla ante, dictum et pulvinar et, facilisis ut ipsum. Nullam nec augue eget nibh ullamcorper porttitor. Donec eros ex, vehicula vel orci hendrerit, interdum ullamcorper libero. Morbi ullamcorper turpis purus, et efficitur odio luctus vitae. Pellentesque orci libero, congue vel fermentum a, sodales vitae risus. Donec consequat erat feugiat, laoreet est sit amet, egestas lectus.</p>
                        <p>Curabitur porttitor porta ex eu aliquam. Suspendisse lobortis lacus a magna sollicitudin, quis dapibus quam egestas. Proin mauris nunc, bibendum sit amet felis sed, semper sagittis justo. Integer rutrum tortor id tortor mollis mattis. Morbi vehicula lectus lectus, et mollis lorem ullamcorper a. Pellentesque sed nisl ante. Donec ac tristique quam, eu porttitor libero.</p>
                    </div>
                </div>
                <div className="display separator-top">
                    <div className="left-half">
                        <h1>Bryllup</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus tellus vel sapien faucibus faucibus id vitae libero. Integer porttitor efficitur ante quis gravida. Quisque tortor sapien, vulputate vitae sagittis vitae, sagittis eget mi. Donec non augue id tellus ultrices commodo a sit amet mi. Curabitur porttitor ut dui ac consectetur. Aenean maximus elementum orci, in placerat libero tincidunt nec. Vivamus massa velit, aliquet sed lacus a, placerat accumsan tortor. Vivamus volutpat, quam quis tincidunt viverra, lacus ligula euismod odio, ac malesuada tortor nibh quis est.</p>
                        <p>Sed tempor tempor viverra. Sed efficitur ligula quis facilisis fringilla. Sed fringilla odio et velit fringilla, at rutrum enim vulputate. Quisque nulla ante, dictum et pulvinar et, facilisis ut ipsum. Nullam nec augue eget nibh ullamcorper porttitor. Donec eros ex, vehicula vel orci hendrerit, interdum ullamcorper libero. Morbi ullamcorper turpis purus, et efficitur odio luctus vitae. Pellentesque orci libero, congue vel fermentum a, sodales vitae risus. Donec consequat erat feugiat, laoreet est sit amet, egestas lectus.</p>
                        <p>Curabitur porttitor porta ex eu aliquam. Suspendisse lobortis lacus a magna sollicitudin, quis dapibus quam egestas. Proin mauris nunc, bibendum sit amet felis sed, semper sagittis justo. Integer rutrum tortor id tortor mollis mattis. Morbi vehicula lectus lectus, et mollis lorem ullamcorper a. Pellentesque sed nisl ante. Donec ac tristique quam, eu porttitor libero.</p>
                    </div>
                    <div className="right-half has-image">
                        <img src="/static/island_wedding.jpg" />
                    </div>
                </div>
                <div className="display separator-top">
                    <div className="left-half has-image">
                        <img src="/static/island_boat.jpg" />
                    </div>
                    <div className="right-half">
                        <h1>Åpningstider</h1>
                        <h3>Sesongstart fredag 21/06/19 &mdash; Sesongslutt lørdag 10/08/19</h3>
                        <dl>
                            <dt>Restauranten åpner kl</dt>
                            <dd>14.00 til 22.00</dd>

                            <dt>Kroa er åpen fra kl</dt>
                            <dd>12.00 til 02.00</dd>
                        </dl>
                    </div>
                </div>
                {/* <div className="display separator-top">
            <div className="full">
                <h1>Åpningstider</h1>
                <h3>Sesongstart fredag 21/06/19 &mdash; Sesongslutt lørdag 10/08/19</h3>
                <dl>
                    <dt>Restauranten åpner kl</dt>
                    <dd>14.00 til 22.00</dd>

                    <dt>Kroa er åpen fra kl</dt>
                    <dd>12.00 til 02.00</dd>
                </dl>
            </div>
        </div> */}
                <footer className="footer">
                    <div className="footer__content">
                        <p>Stangholmen Fyr 2019 &copy; | Site by <a href="/">Real Name</a></p>
                    </div>
                </footer>
                <script src="/static/app.js"></script>
            </>
        );
    }
}
// const Index = () => (
    
// );

// export default Index;