// // const sql = require("msnodesqlv8");

// // // database configuration
// // var config={
// //     user : 'krishan@flick2know.com',
// //     server : 'ewwayxoov5.database.windows.net\\SQLEXPRESS',
// //     database : 'Test_F2klocationsNetwork',
// //     driver : 'msnodesqlv8',
// //     options : {
// //         trustedConnection : true
// //     }
// // };

// // //connect to database
// // sql.NativeConnection(config,function(err){
// //     if(err){
// //         console.log(err);
// //     }
// // })
// //     var request = new sql.request();

// //     request.query('select top 10* from f2klocations', function(err,recordSet){
// //         if(err){
// //             console.log(err);
// //         }else{
// //             console.log(recordSet);
// //         }
// //     });

// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Accounts } from './entities/accounts.entity';
// import { Transactions } from './entities/transaction.entity';

// export const typeOrmModule = TypeOrmModule.forRoot({
//     type: 'mysql',
//     host: process.env.HOST,
//     port: DB_PORT,
//     username: process.env.USER_NAME,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     entities: [Accounts, Transactions],
//     synchronize: false,
//     logging: false,
//   });