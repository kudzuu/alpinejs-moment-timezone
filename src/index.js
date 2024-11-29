import moment from 'moment-timezone'

const Plugin = function (Alpine) {
    Alpine.magic('moment', () => { return value => moment(value) })
}

export default  Plugin