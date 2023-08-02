import { env } from '@/env';
import {hash} from 'bcryptjs'

import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient({
    log: env.NODE_ENV == 'dev' ? ['query'] : [],
});

export {prisma};