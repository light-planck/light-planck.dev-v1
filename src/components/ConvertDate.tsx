import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'
import type { NextPage } from 'next'

interface Props {
  dateISO: string
}

const ConvertDate: NextPage<Props> = ({ dateISO }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), '(yyyy年MM月dd日)', {
        locale: ja,
      })}
    </time>
  )
}

export default ConvertDate
