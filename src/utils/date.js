const mL = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const getDate = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth();
    const day = dateObj.getUTCDate();

    return `${day} ${mL[month]}`;
}