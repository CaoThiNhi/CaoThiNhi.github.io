/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package player;

/**
 *
 * @author Nhi
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javazoom.jl.decoder.JavaLayerException;
import javazoom.jl.player.Player;
import oopproject.GiaoDien;
import oopproject.OOPproject;



public class Method {
    public Thread x;
    public long pauseLocation;
    public long songTotalLength;
    public String fileLocation;
    FileInputStream FIS;
    BufferedInputStream BIS;
    public Player player;
    public static int isComplete;
    
    public void Stop(){ // hàm Stop, trở về 0s
        if(player != null){
//            player.close();
           pauseLocation = 0;
           songTotalLength = 0;
           if(x!=null) x.stop();
        }
    }
    /*public void Pause() throws IOException{ // tạm dừng ở vị trí đang chơi
        if(player != null){
            pauseLocation =FIS.available();
            if(x != null && x.isAlive())
                x.suspend();
        }
    }*/
    public boolean Pause(){
        try {
            if(player != null){
                pauseLocation =FIS.available();
            if(x != null && x.isAlive())
                x.suspend();
            }
            return true;
        } catch (Exception ex){
            return false;
        }
    }
    public void resume()
    {
        x.resume();
    }  
    public void Play(String path){ // chơi nhạc
        try {
            FIS = new FileInputStream(path);
            BIS = new BufferedInputStream(FIS);
           
            try {
                player = new Player(BIS);
                songTotalLength = FIS.available();
                fileLocation = path +"";
            } catch (JavaLayerException ex) {
              
            }
        } catch (FileNotFoundException ex) {
            
        } catch (IOException ex) {
            Logger.getLogger(OOPproject.class.getName()).log(Level.SEVERE, null, ex);
        }
        x = new Thread(){
         
            
            public void run(){
                try {
                    player.play();
                    if(player.isComplete() &&(GiaoDien.repeat== 1)){
                        
                        Play(fileLocation);
                    }
                } catch (JavaLayerException ex) {
                    
                }
            }
        };
        if(x != null) x.start();
        
               
    }
    
    
    public boolean isComplete(){ // kiểm tra hoàn thành chưa
        player = this.player;
        if(player.isComplete()){
            return true;
        }
        return false;
        
    }
    
}
