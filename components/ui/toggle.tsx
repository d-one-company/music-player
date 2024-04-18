import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center ring-offset-transparent transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-small rounded-lg p-2 text-black transition-all duration-200 data-[state=on]:bg-primary-50 data-[state=on]:hover:bg-primary-100 data-[state=off]:bg-neutral-50 data-[state=off]:hover:bg-neutral-100',
        blockkit:
          'data-[state=on]:bg-neutral-100 text-black-light m-0 rounded border data-[state=on]:border-neutral-100 data-[state=off]:border-transparent data-[state=off]:bg-transparent',
        favorite:
          '[&>svg]:data-[state=on]:stroke-white [&>svg]:data-[state=off]:stroke-[#7c7c7d] [&>svg]:data-[state=on]:fill-white [&>svg>g>path]:data-[state=on]:fill-white [&>svg>path]:data-[state=on]:stroke-white',
      },
      size: {
        default: 'p-2',
        sm: 'p-1',
        lg: 'px-4 py-3',
        squareSmall: 'h-4 w-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
