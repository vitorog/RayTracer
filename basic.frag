#version 400
out vec4 frag_color;
in vec2 tex_coords;

uniform sampler2D texture;

void main(void)
{
  vec4 tex_color = texture2D(texture, tex_coords);
frag_color = tex_color;
//  frag_color = vec4(1.0f,0.0f,0.0f,1.0f);
}
