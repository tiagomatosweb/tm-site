import {cva, type VariantProps} from 'class-variance-authority';

export {default as Alert} from './Alert.vue';
export {default as AlertDescription} from './AlertDescription.vue';
export {default as AlertTitle} from './AlertTitle.vue';

export const alertVariants = cva(
  'relative w-full rounded-lg px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 [&>svg~*]:pl-7 dark:border-gray-800 dark:[&>svg]:text-gray-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50',
        destructive:
          'text-red-500 dark:text-red-100 ' +
          'bg-red-500/20 dark:bg-red-900/40 ' +
          'rounded-lg ' +
          'text-sm text-red-700 [&>svg]:text-red-500',
        success:
          'text-green-500 dark:text-green-100 ' +
          'bg-green-500/20 dark:bg-green-900/40 ' +
          'rounded-lg ' +
          'text-sm text-green-700 [&>svg]:text-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>
