const { Component } = require('inferno');
const { cacheComponent } = require('../util/cache');

class Patreon extends Component {
    render() {
        const { title, url, url_for } = this.props;
        if (!url) {
            return <div class="notification is-danger">
                You forgot to set the <code>url</code> Patreon.
                Please set it in <code>_config.yml</code>.
            </div>;
        }
        return <a class="button is-danger donate" href={url_for(url)} target="_blank" rel="noopener">
            <span class="icon is-small">
                <i class="fab fa-patreon"></i>
            </span>
            <span>{title}</span>
        </a>;
    }
}

module.exports = cacheComponent(Patreon, 'donate.petreon', props => {
    const { donate, helper } = props;

    return {
        url: donate.url,
        title: helper.__('donate.' + donate.type),
        url_for: helper.url_for
    };
});
