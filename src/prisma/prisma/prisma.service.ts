import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaClient extends PrismaClient implements OnModuleInit{}
