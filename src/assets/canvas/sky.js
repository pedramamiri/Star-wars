function Star (canvas,cx,cy,innerRadius,r,g,b){
    this.ctx         = canvas.getContext('2d');
    this.rot         = Math.PI / 2 * 3;
    this.w           = window.innerWidth;
    this.h           = window.innerHeight/3;
    this.step        = Math.PI / 5;
    this.innerRadius = innerRadius
    this.outerRadius = this.innerRadius*2
    this.cx          = cx;
    this.cy          = cy;
    this.r           = r;
    this.g           = g;
    this.b           = b;
    this.v           = Math.random()*3
    this.key         = false;
    
    this.draw = ()=>{
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y - this.outerRadius )
      for (var i = 0; i < 5; i++) {
          let x = this.cx + Math.cos(this.rot) * this.outerRadius;
          let y = this.cy + Math.sin(this.rot) * this.outerRadius;
          this.ctx.lineTo(x, y)
          this.rot += this.step
  
          x = this.cx + Math.cos(this.rot) * this.innerRadius;
          y = this.cy + Math.sin(this.rot) * this.innerRadius;
          this.ctx.lineTo(x, y)
          this.rot += this.step
      }
      this.ctx.lineTo(this.cx, this.cy - this.outerRadius)
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fillStyle=this.color;
      this.ctx.fill();
    }
    this.update = ()=>{
        this.outerRadius = this.innerRadius*2
        if(this.r > 0 && !this.key){
            this.r -= this.v
            this.g -= this.v
            this.b -= this.v
        }else if(this.r <= 0){
            this.r += this.v
            this.g += this.v
            this.b += this.v
            this.innerRadius = Math.random()*2.5;
            this.cx  = Math.random()* this.w -20 ;
            this.cy  = Math.random()* this.h -20 ;
            this.key = true;
        }else if(this.r>0 && this.r<255 && this.key){
            this.r += this.v
            this.g += this.v
            this.b += this.v
        }else if(this.r >= 255){
            this.r -= this.v
            this.g -= this.v
            this.b -= this.v
            this.key = false;
        }
      this.color =`rgb(${this.r},${this.g},${this.b})`;
      this.draw();
    }
    return {
      draw : this.draw,
      update : this.update
    }
  }
  
  
  function Sky(canvas){
      this.canvas     = canvas;
      this.ctx        = this.canvas.getContext('2d');
      this.mp         = 40;
      this.w          = window.innerWidth -20;
      this.h          = window.innerHeight/3;
      this.particles  = [];
  
      this.setDimention = ()=>{
          this.canvas.width  = this.w;
          this.canvas.height = this.h;
      }
  
      this.setParticles = ()=>{
          for (var i=0; i<this.mp; i++){
              let innerRadius =Math.random()*3; 
              let cx  = Math.random()* this.w -20;
              let cy   = Math.random()* this.h-20 ;
              this.particles.push(new Star(this.canvas,cx,cy,innerRadius,255,255,255))
          }
      }
  
      this.animate = ()=>{
          requestAnimationFrame(this.animate)
          this.ctx.clearRect(0,0,this.w,this.h);
          this.particles.forEach(p => {
              p.update();
          });
      }
      
      
  
      return {
          setDimention  : this.setDimention,
          setParticles  : this.setParticles,
          animate       : this.animate,
          particles     : this.particles,
      }
  
  }
  
  module.exports = { Sky };