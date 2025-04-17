import { Badge, Inline, Stack } from '@sanity/ui'
import { toPlainText } from 'next-sanity'

export const WordCount = (props: any) => {
  const wordCount = toPlainText(props.value).split(/\s+/).length
  const isEmpty = wordCount === 0

  return (
    <Stack space={2}>
      {props.renderDefault({ ...props, initialActive: true })}
      <Inline>
        <Badge
          tone={isEmpty ? 'default' : 'primary'} 
          radius="full" 
          padding={2}
      >
        {isEmpty ? 'No words' : `Words: ${wordCount}`}
      </Badge>
      </Inline>
      
    </Stack>
  )
} 