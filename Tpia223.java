/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package l.tpia223;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

/**
 *
 * @author welcome
 */
public class Tpia223 {

    public static void main(String[] args) {
        
        String color []={"white","black","red","green","blue","yallow","grey","purpel"};
        
        String codemaker[]=new String[4];
        String codebreaker[][]=new String[8][codemaker.length];
       
              ArrayList<Float> Fitness= new ArrayList<Float>();
             HashMap<Float,Float> FP=new HashMap<Float,Float>();
             
            
        
        
        
          Random rd =new Random() ;
        for(int i=0;i<codemaker.length;i++){
            int r= rd.nextInt(color.length);
            codemaker[i] = color[r];
        }
        
        System.out.println("\n\n\n\n...................WELCOM...............\n\n");
        System.out.print("");//explanaation
        
        System.out.println("\n~~~~~ CODE MAKER ~~~~");
        for(int i=0;i<codemaker.length;i++){
             System.out.print(codemaker[i]+"|");
       
           }
        //codebreaker
       
        for(int i=0;i<codebreaker.length;i++){
            for(int j=0;j<codemaker.length;j++){
                int r= rd.nextInt(color.length);
                codebreaker[i][j]=color[r];
            }
            
        }
        
        System.out.println("\n\n\n~~~~~ CODE BREAKER ~~~~~~\n");
        for(int i=0;i<codebreaker.length;i++){
            System.out.print("the proposal n°"+(i+1)+":\t   ");
            for(int j=0;j<codemaker.length;j++){
               
              System.out.print(codebreaker[i][j]+"|"); 
            }
            System.out.println("\n");
        }
        
        ////////////////////////////////////////////////////////////////////////////////////////////
     double s=(2.5*codemaker.length);
          for(int b=0;b<5000;b++){
         System.out.println("##############################  "+(b+1)+"  ###################################");
        float f=0;
        Fitness.clear();
        FP.clear();
        for(int i =0;i<codebreaker.length;i++){
            int hit =0;
            int miss =0;
           float fitness;
            for(int j =0;j<codemaker.length;j++){
                if(codebreaker[i][j].equals(codemaker[j])){
                    hit++;
                }else{
                    for(int k=0;k<codemaker.length;k++ ){
                        if(codebreaker[i][j].equals(codemaker[k])){
                            miss++;
                        }
                    }
                }
            }
            
            fitness =(float) ((hit*4.5) +(miss*1.5));
            Fitness.add(fitness);
            f=f+fitness;
            
        }
        
        System.out.println("\n\n~~~~~ FITNESS AND PROBABILITY ~~~~~~~~\n");
          for(int i =0;i<codebreaker.length;i++){
             System.out.print("the proposal n°"+(i+1)+":\t   ");
             float proba =(Fitness.get(i)/f)*100;
             FP.put(Fitness.get(i),proba);
             System.out.print(" fitness == "+Fitness.get(i)+"\t probabelity == "+proba+"%\n");
              
            }
           
         float max1=Fitness.get(0);
         int i1=0,i2 =1;
          float max2=0;
          for(int i =0;i<Fitness.size();i++){
             if(Fitness.get(i)>=max1&&(i1!=i)){
                 max2=max1;
                 i2=i1;
                 max1=Fitness.get(i);
                 i1=i;
             }else{
                if(Fitness.get(i)>=max2&&(i2!=i)){
                 max2=Fitness.get(i);
                 i2=i;
             } 
             }
              
             
             
          }
        
         
          System.out.println("\n ===>  max Fitness 1:is n°"+(i1+1)+": "+max1+" 2: is n° "+(i2+1)+": "+max2);
          
          
          
          
          System.out.println("\n\n~~~~~ CROISMENT ~~~~~~");
          //coroisment 
          String ncodebreaker[][]= new String [8][codemaker.length];
           int cr=0;
          while(cr==0){
            cr =rd.nextInt(codemaker.length);
          }
          
          System.out.println(cr);
          
           
           
          for(int i=1;i<=cr;i++){
             String c=codebreaker[i2][codemaker.length-1];
               System.out.println(c+" ==> "+codebreaker[i1][codemaker.length-i]);
         codebreaker[i2][codemaker.length-i]=codebreaker[i1][codemaker.length-i];
          System.out.println(codebreaker[i1][codemaker.length-i]+" ==> "+c);
          codebreaker[i1][codemaker.length-i]=c; 
          }
          
         //-1
       /*  c=codebreaker[i2][codemaker.length-2];
         codebreaker[i2][codemaker.length-2]=codebreaker[i1][codemaker.length-2];
         codebreaker[i1][codemaker.length-2]=c;
          
        
         //-2
         
          for(int j=0;j<codemaker.length;j++){
               ncodebreaker[0][j]=codebreaker[i1][j];
               ncodebreaker[1][j]=codebreaker[i2][j];
           } */
          for(int i =0;i<Fitness.size();i++){
              if(i==i1){
                  for(int j=0;j<codemaker.length;j++){
               ncodebreaker[i][j]=codebreaker[i1][j];
               
           } 
              }else{
                  if(i==i2){
                       for(int j=0;j<codemaker.length;j++){
               ncodebreaker[i][j]=codebreaker[i2][j];
              
           } 
                     
                  }else{
                      for(int j=0;j<codemaker.length;j++){
               ncodebreaker[i][j]=codebreaker[i][j];
              
           } 
                  }
              }
          }
          
         
           /*for(int j=0;j<codemaker.length;j++){
               ncodebreaker[2][j]=codebreaker[i1][j];
               ncodebreaker[3][j]=codebreaker[i2][j];
           } */
          
        System.out.println("\n\n\n~~~~~ THE NEW CODE BREAKER ~~~~~~\n");
        for(int i=0;i<ncodebreaker.length;i++){
            System.out.print("the proposal n°"+(i+1)+":\t   ");
            for(int j=0;j<codemaker.length;j++){
               
              System.out.print(ncodebreaker[i][j]+"|"); 
            }
            System.out.println("\n");
        }
        
        
        
        Fitness.clear();
        for(int i =0;i<ncodebreaker.length;i++){
            int hit =0;
            int miss =0;
           float fitness;
            for(int j =0;j<codemaker.length;j++){
                if(ncodebreaker[i][j].equals(codemaker[j])){
                    hit++;
                }else{
                    for(int k=0;k<codemaker.length;k++ ){
                        if(ncodebreaker[i][j].equals(codemaker[k])){
                            miss++;
                        }
                    }
                }
            }
            
            fitness =(float) ((hit*2.5) +(miss*1.5));
            Fitness.add(fitness);
            f=f+fitness;
            
        }
        FP.clear();
        for(int i =0;i<codebreaker.length;i++){
           
             float proba =(Fitness.get(i)/f)*100;
             FP.put(Fitness.get(i),proba);
             
              
            }
        
        
        
        
        
        //mitation
       
        System.out.println("\n~~~~~~~~ MITATION ~~~~\n\n");
        FP.forEach((key,value)->{ 
            int v=0;
        if(value<=10){
            for(int i =0;i<Fitness.size();i++){
                if(key==Fitness.get(i)){
                  
                      v=i;  
                }
            }
            int cl =rd.nextInt(color.length);
             int ir = v;
             int jr =rd.nextInt(codemaker.length);
              System.out.println("\n"+ncodebreaker[ir][jr]+"  =====>  "+color[cl]+"\n\n");

        
              ncodebreaker[ir][jr]=color[cl];   
        }
        
        });
        
        
     /*   int cl =rd.nextInt(color.length);
        int ir =rd.nextInt(4);
        int jr =rd.nextInt(codemaker.length);
      System.out.println("\n"+ncodebreaker[ir][jr]+"  =====>  "+color[cl]+"\n\n");

        
              ncodebreaker[ir][jr]=color[cl];   
*/
       //new 
         System.out.println("\n\n\n~~~~~ THE NEW CODE BREAKER ~~~~~~\n");
        for(int i=0;i<ncodebreaker.length;i++){
            System.out.print("the proposal n°"+(i+1)+":\t   ");
            for(int j=0;j<codemaker.length;j++){
              codebreaker[i][j]=ncodebreaker[i][j]; 
              System.out.print(ncodebreaker[i][j]+"|"); 
            }
            System.out.println("\n");
        }
        if(b==4999){
            System.out.println("thers no solution");
        }
         for(int k =0;k<Fitness.size();k++){
                  if(Fitness.get(k)==s){
                      System.out.println("the proposal n°"+(k+1)+" is the goal: " );
                      for(int q=0;q<codemaker.length;q++){
                          codebreaker[k][q]=ncodebreaker[k][q]; 
                         System.out.print(codebreaker[k][q]+"|"); 
                           }
                         System.out.println("\n");
                      b=100;
                      break;
                  }
              }
       
        
        
          
          }
        
        }
}
