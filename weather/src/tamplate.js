*{
    margin: 0;
    padding: 0;
}
.box{
    background-color: darkgrey;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .child{
    background-color: cyan;
    color: black;
    text-align: center;
    height: 20rem;
    width: 35rem;
    border-radius: 9px;
  }
  .{
   display: flex;
   justify-content: center;
   padding-top: 10px;
   padding-bottom: 10px;
  }
  .inputs input{
    text-align: center;
    height: 30px;
    width: 15rem;
    border-radius: 9px;
  } 
  

  @media (max-width:1000rem) {
    .box .child{
        width: 60%;
        height: 80%;
    }
    .inputs input{
        width: 40%;
    }
    .header{
        word-wrap: break-word;
    }
    .tempin_max{
        word-wrap: break-word; 
    }
    .temp{
        word-wrap: break-word;  
    }
  }