import 'express';

declare module 'express' {
  export interface Request {
    user?: Record<string, any>;
  }
}
