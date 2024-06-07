// import { MdFormatListNumbered } from "react-icons/md"

const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en_IN',{
        style : "currency",
        currency : 'INR',
        minimumIntegerDigits : 2
    })

    return formatter.format(num)
}


export default displayINRCurrency