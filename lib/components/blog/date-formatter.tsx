import { parseISO, format } from 'date-fns'
import cn from "classnames"

type Props = {
  dateString: string
  className?: string
}

const DateFormatter = ({ dateString, className }: Props) => {
  const date = parseISO(dateString)
  return <time className={cn("text-white", className)} dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
