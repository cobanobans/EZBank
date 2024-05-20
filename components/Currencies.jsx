import { getBalance } from '@/utils/actions'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import currencies from '@/utils/currencies'
import ChartComponent from './ChartComponent'
import StatsComponent from './StatsComponent'
const url = 'https://open.er-api.com/v6/latest/USD'

const Currencies = async ({ userId }) => {
  const balanceUSD = (await getBalance(userId)).toFixed(2)
  const response = await fetch(url)
  const data = await response.json()
  const balanceGBP = (data.rates.GBP * balanceUSD).toFixed(2)
  const balanceEUR = (data.rates.EUR * balanceUSD).toFixed(2)

  const balances = {
    USD: balanceUSD,
    EUR: balanceEUR,
    GBP: balanceGBP,
  }

  return (
    <>
      <div className='flex flex-col items-center lg:items-start gap-3 w-full'>
        <div className='flex flex-col w-full lg:flex-row  lg:justify-center items-center lg:items-center lg:gap-20 gap-10 md:pr-5'>
          <div className='w-60'>
            <ChartComponent userId={userId} />
          </div>
          <div>
            <StatsComponent userId={userId} />
          </div>
        </div>
        <div className='flex flex-col w-full lg:flex-row lg:items-start items-center gap-10 lg:gap-4 mt-5'>
          {currencies.map((currency) => {
            const { flag, code } = currency
            const balance = balances[code]

            return (
              <div
                key={code}
                className='flex flex-row items-center gap-3  bg-secondary h-20 w-2/3  lg:max-w-80 pl-2 shadow-xl hover:shadow-2xl duration-100 border-b-8 border-accent rounded-xl'
              >
                <span className={`fi fi-${flag} text-4xl rounded-md`}></span>
                <div className='text-lg text-white flex flex-row gap-2 '>
                  <p>{balance}</p>
                  <p>{code}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Currencies
