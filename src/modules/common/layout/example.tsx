'use client'

import { Button } from '@/components/ui/button'

export const Example = () => {
  return (
    <div>
      <Button data-testid="actionButton" className="hidden" onClick={() => window.alert('test1')}>
        Test
      </Button>
      <Button data-testid="actionButton" onClick={() => window.alert('test2')}>
        Test2
      </Button>
    </div>
  )
}
