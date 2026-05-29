import os
import sys
import webbrowser

def main():
    # หาตำแหน่งของไฟล์ index.html ที่ถูกแพ็ครวมไว้ในตัวโปรแกรม .exe
    if getattr(sys, 'frozen', False):
        base_path = sys._MEIPASS
    else:
        base_path = os.path.dirname(os.path.abspath(__file__))
        
    html_path = os.path.join(base_path, 'index.html')
    
    # สั่งให้เปิดไฟล์ปฏิทินขึ้นมาบนเบราว์เซอร์เริ่มต้นของเครื่องคอมพิวเตอร์ทันที
    if os.path.exists(html_path):
        webbrowser.open(f"file:///{html_path}")
    else:
        print("Error: index.html not found.")

if __name__ == '__main__':
    main()