/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package oopproject;

import java.io.File;
import java.io.IOException;
import java.util.LinkedList;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.DefaultListModel;
import javax.swing.ImageIcon;
import javax.swing.JFileChooser;
import static javax.swing.JFrame.EXIT_ON_CLOSE;
import player.Method;
import player.Volume;
/**
 *
 * @author KYSUDAOMO
 */
public class MusicPlay extends javax.swing.JFrame {

    /**
     * Creates new form MusicPlay
     */
    int current = -1;
    private int repeat = 0, Shuffel = 0, jVolume = 0,nowPlayingList = 0,  nowPlayingList2 = 0; 
    private int songId;
    private boolean play1 = false, show=false;
    public static int autoPlay= 0;
    Method method = new Method();
    LinkedList listMusic,listMusic1,listRanNum;
    LinkedList randomNumbers;
    String path =null;
    Volume volume = new Volume();


    
    public MusicPlay() {
        initComponents();
       // setResizable(false);
        setResizable(false);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setIconImage(new ImageIcon(this.getClass().getClassLoader().getResource("Image/Icono.png")).getImage());
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jScrollPane1 = new javax.swing.JScrollPane();
        jList1 = new javax.swing.JList<>();
        jLabel1 = new javax.swing.JLabel();
        jBShuffel = new javax.swing.JButton();
        jBPrevious = new javax.swing.JButton();
        jBNext = new javax.swing.JButton();
        jBReplayAll = new javax.swing.JButton();
        jVolumeSlider = new javax.swing.JSlider();
        jBVolume = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        jBPlay = new javax.swing.JButton();
        jSlider1 = new javax.swing.JSlider();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        jOpen = new javax.swing.JMenuItem();
        jExit = new javax.swing.JMenuItem();
        jAbout = new javax.swing.JMenu();
        jMenuItem1 = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Music Player");
        setFont(new java.awt.Font("Adobe Arabic", 2, 10)); // NOI18N
        setLocation(new java.awt.Point(300, 150));

        jPanel1.setBackground(java.awt.Color.black);

        jList1.setBackground(java.awt.Color.black);
        jList1.setForeground(java.awt.Color.white);
        jList1.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseReleased(java.awt.event.MouseEvent evt) {
                jList1MouseReleased(evt);
            }
        });
        jScrollPane1.setViewportView(jList1);

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Default1.png"))); // NOI18N

        jBShuffel.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Aleatorio0.png"))); // NOI18N
        jBShuffel.setBorderPainted(false);
        jBShuffel.setContentAreaFilled(false);
        jBShuffel.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBShuffelActionPerformed(evt);
            }
        });

        jBPrevious.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Atras.jpg"))); // NOI18N
        jBPrevious.setBorderPainted(false);
        jBPrevious.setContentAreaFilled(false);
        jBPrevious.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBPreviousActionPerformed(evt);
            }
        });

        jBNext.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Adelante.jpg"))); // NOI18N
        jBNext.setBorderPainted(false);
        jBNext.setContentAreaFilled(false);
        jBNext.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBNextActionPerformed(evt);
            }
        });

        jBReplayAll.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Repetir0.png"))); // NOI18N
        jBReplayAll.setBorderPainted(false);
        jBReplayAll.setContentAreaFilled(false);
        jBReplayAll.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBReplayAllActionPerformed(evt);
            }
        });

        jVolumeSlider.setBackground(new java.awt.Color(0, 0, 0));
        jVolumeSlider.addChangeListener(new javax.swing.event.ChangeListener() {
            public void stateChanged(javax.swing.event.ChangeEvent evt) {
                jVolumeSliderStateChanged(evt);
            }
        });

        jBVolume.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/ConAudio.jpg"))); // NOI18N
        jBVolume.setBorderPainted(false);
        jBVolume.setContentAreaFilled(false);
        jBVolume.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBVolumeActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Tempus Sans ITC", 1, 18)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(0, 0, 255));
        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("Music Player");

        jBPlay.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Play.jpg"))); // NOI18N
        jBPlay.setBorderPainted(false);
        jBPlay.setContentAreaFilled(false);
        jBPlay.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jBPlayActionPerformed(evt);
            }
        });

        jSlider1.setBackground(null);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 472, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 258, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 40, Short.MAX_VALUE))
                            .addComponent(jLabel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addContainerGap())
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addComponent(jBShuffel)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jBPrevious)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jBPlay)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jBNext)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jBReplayAll)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jBVolume)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jVolumeSlider, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(23, 23, 23))
                    .addComponent(jSlider1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 299, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jSlider1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                        .addComponent(jBShuffel)
                        .addComponent(jBPrevious)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jBNext)
                            .addComponent(jBReplayAll))
                        .addComponent(jBVolume)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                            .addComponent(jVolumeSlider, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGap(10, 10, 10)))
                    .addComponent(jBPlay))
                .addContainerGap())
        );

        jMenu1.setText("File");

        jOpen.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_O, java.awt.event.InputEvent.CTRL_MASK));
        jOpen.setMnemonic('O');
        jOpen.setText("Open");
        jOpen.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jOpenActionPerformed(evt);
            }
        });
        jMenu1.add(jOpen);

        jExit.setAccelerator(javax.swing.KeyStroke.getKeyStroke(java.awt.event.KeyEvent.VK_E, java.awt.event.InputEvent.CTRL_MASK));
        jExit.setMnemonic('E');
        jExit.setText("Exit");
        jExit.setToolTipText("");
        jExit.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jExitActionPerformed(evt);
            }
        });
        jMenu1.add(jExit);

        jMenuBar1.add(jMenu1);

        jAbout.setText("Help");
        jAbout.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jAboutActionPerformed(evt);
            }
        });

        jMenuItem1.setText("About");
        jMenuItem1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jMenuItem1ActionPerformed(evt);
            }
        });
        jAbout.add(jMenuItem1);

        jMenuBar1.add(jAbout);

        setJMenuBar(jMenuBar1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jOpenActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jOpenActionPerformed
        // TODO add your handling code here:
        JFileChooser fileChooser = new JFileChooser();
        File file = null;
        fileChooser.setAcceptAllFileFilterUsed(true);
        fileChooser.setMultiSelectionEnabled(true);
        int Status = fileChooser.showOpenDialog(null);
        if(Status == JFileChooser.APPROVE_OPTION)
        {
        file = fileChooser.getSelectedFile();
        String song = file +"";
            String name = fileChooser.getSelectedFile().getName();
            path = song.substring(0, (song.length()-name.length()));
       }
        DefaultListModel model = new DefaultListModel();
        listMusic = new LinkedList();

         File[] myfile = fileChooser.getSelectedFiles();
         for(File f:myfile){
            
            // luu vao list2 
             model.addElement(f.getName());
             listMusic.add(f.getName());  
         }       
         jList1.setModel(model);                        
    }//GEN-LAST:event_jOpenActionPerformed

    private void jExitActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jExitActionPerformed
        // TODO add your handling code here:
        System.exit(0);
    }//GEN-LAST:event_jExitActionPerformed

    private void jBPreviousActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jBPreviousActionPerformed
        // TODO add your handling code here:
        if(method.x.isAlive()){
            method.x.stop();}
        play1 = true;
        jBPlay.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Pause.jpg")));
        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Default.gif"))); 
        if(nowPlayingList==0){
                        Previous(listMusic);
                        }
                        else{Previous(listMusic1);}
    }//GEN-LAST:event_jBPreviousActionPerformed

    private void jBPlayActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jBPlayActionPerformed
        // TODO add your handling code here:
           if(!play1){ play1=true;
               try {
                   method.Pause();
               } catch (IOException ex) {
                   Logger.getLogger(MusicPlay.class.getName()).log(Level.SEVERE, null, ex);
               }
            jBPlay.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Play.jpg")));
            jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Default1.png"))); // NOI18N


          
                }else{ play1 =false;
             method.resume();
            jBPlay.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Pause.jpg")));
            jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Default.gif"))); // NOI18N

        }
    }//GEN-LAST:event_jBPlayActionPerformed

    private void jBVolumeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jBVolumeActionPerformed
        // TODO add your handling code here:
        if(jVolume==0){ jVolume =1;
            jBVolume.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/ConAudio.jpg")));
            volume.stateChange(jVolumeSlider.getValue()/100f);
        }else if(jVolume==1){ jVolume = 0;
            jBVolume.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/SinAudio.jpg")));
            volume.stateChange(0.0f);
        }
    }//GEN-LAST:event_jBVolumeActionPerformed

    @SuppressWarnings("empty-statement")
    private void jBNextActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jBNextActionPerformed
        // TODO add your handling code here:
        if(method.x.isAlive()){
            method.x.stop();}
        play1 = true;
        jBPlay.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Pause.jpg")));
        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Default.gif"))); 
        if(nowPlayingList==0){
        next(listMusic);
        }else{next(listMusic1);};
    }//GEN-LAST:event_jBNextActionPerformed

    
public void next(LinkedList list){
    {
        DefaultListModel model = new DefaultListModel();
            method.Stop();
            
            if (songId < list.size()-1){            
                songId++;   
                String nameNext = (String) list.get(songId);      
                String path2 = path+""+nameNext;
                model.addElement(nameNext);
                jLabel2.setText(nameNext);            
                method.Play(path2); 
            }
            else if(songId >= list.size()-1){
            songId = 0;
            String nameNext = (String) list.get(songId);      
                String path2 = path+""+nameNext;
                model.addElement(nameNext);
                jLabel2.setText(nameNext);            
                method.Play(path2);}
    }
    if(nowPlayingList==0)
                {jList1.setSelectedIndex(songId);}
                else
                {jList1.setSelectedIndex((int) listRanNum.get(songId));}
}
 public void Previous(LinkedList list){
    DefaultListModel model = new DefaultListModel();
            method.Stop();
            if (songId > 0){
                songId--;
                String namePrevious = (String) list.get(songId);  
                String path2 = path+""+namePrevious;
                model.addElement(namePrevious);
                jLabel2.setText(namePrevious); 
                method.Play(path2); 
            }
            else if(songId <= 0){
            songId = list.size()-1;
            String namePrevious = (String) list.get(songId); 
                String path2 = path+""+namePrevious;
                model.addElement(namePrevious);
                jLabel2.setText(namePrevious);            
                method.Play(path2); 
            }
     if(nowPlayingList==0)
                {jList1.setSelectedIndex(songId);}
                else
                {jList1.setSelectedIndex((int) listRanNum.get(songId));}            
}       
    private void jList1MouseReleased(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jList1MouseReleased
        // TODO add your handling code here:
        songId = jList1.getSelectedIndex();
        method.Stop();

        String value = jList1.getSelectedValue();

        String song = path+""+value;
        DefaultListModel model = new DefaultListModel();
        model.addElement(value);
        jLabel2.setText(value);
        jBPlay.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Pause.jpg")));
        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Default.gif"))); 
        method.Play(song);
             Timer timer = new Timer();
                timer.schedule(new TimerTask(){
                 @Override
                 public void run(){   
                    if (method.isComplete()){
                        if(nowPlayingList==0){
                        next(listMusic);
                        }
                        else{next(listMusic1);}}
                    }
                 
                },0,1000);
    }//GEN-LAST:event_jList1MouseReleased

    private void jBShuffelActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jBShuffelActionPerformed
      if(method.x.isAlive()){
            method.x.stop();}
            play1 = true;
      if(Shuffel==0){ 
          Shuffel= 1;
          jBShuffel.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Aleatorio0.png")));
                  nowPlayingList = 0;
        }else{ Shuffel=0;
            jBShuffel.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Aleatorio1.png")));
            if(listMusic.size()>0){
            nowPlayingList = 1;
            PlayRandom();
            }
    }//GEN-LAST:event_jBShuffelActionPerformed
 }
public void PlayRandom(){
        method.Stop();
        listMusic1 = new LinkedList();
        listRanNum = new LinkedList();
        
      for(int i=0;i<listMusic.size();i++){
           int ranNumber=(int)(Math.random()*(listMusic.size()));
           listRanNum.add(ranNumber);
            String nameN = (String) listMusic.get(ranNumber); 
            listMusic1.add(nameN);
         } 
        songId = 0;
      next(listMusic1);
}

public void PlayRepeat(){
            Method.isComplete =1;
            repeat = 1;
            method.Stop();
            
            while ((repeat == 1)&&(Method.isComplete==1)){
                            songId--;
                 if(nowPlayingList==0)
                        next(listMusic);
                else
                        next(listMusic1);
                Method.isComplete = 0;
               
        }
                
}
    private void jBReplayAllActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jBReplayAllActionPerformed
        // TODO add your handling code here:
        if(repeat == 0){repeat =1;
                 jBReplayAll.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Repetir2.png")));
                 PlayRepeat();
       }else if(repeat == 1){repeat = 0;nowPlayingList2 = 0;
                jBReplayAll.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Image/Repetir0.png")));
}
    }//GEN-LAST:event_jBReplayAllActionPerformed

    private void jVolumeSliderStateChanged(javax.swing.event.ChangeEvent evt) {//GEN-FIRST:event_jVolumeSliderStateChanged
        // TODO add your handling code here:
         float value = jVolumeSlider.getValue()/100f;
           volume.stateChange(value);
    }//GEN-LAST:event_jVolumeSliderStateChanged

    private void jAboutActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jAboutActionPerformed
        // TODO add your handling code here:                                            
       
    }//GEN-LAST:event_jAboutActionPerformed

    private void jMenuItem1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jMenuItem1ActionPerformed
        // TODO add your handling code here:
         About about = new About();
        
        about.setVisible(true);
        about.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        jAbout.setEnabled(false);
           
        about.addWindowListener(new java.awt.event.WindowAdapter() {
            @Override
                public void windowClosing(java.awt.event.WindowEvent windowEvent) {
                    jAbout.setEnabled(true);
                }   
            });     
    }//GEN-LAST:event_jMenuItem1ActionPerformed

    /**
     * @param args the command line arguments
     */
   public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        //</editor-fold>

        /* Create and display the form */
     java.awt.EventQueue.invokeLater(() ->{
            new MusicPlay().setVisible(true);
        });
    }
   
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JMenu jAbout;
    private javax.swing.JButton jBNext;
    private javax.swing.JButton jBPlay;
    private javax.swing.JButton jBPrevious;
    private javax.swing.JButton jBReplayAll;
    private javax.swing.JButton jBShuffel;
    private javax.swing.JButton jBVolume;
    private javax.swing.JMenuItem jExit;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JList<String> jList1;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JMenuItem jMenuItem1;
    private javax.swing.JMenuItem jOpen;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JSlider jSlider1;
    private javax.swing.JSlider jVolumeSlider;
    // End of variables declaration//GEN-END:variables

   
}
