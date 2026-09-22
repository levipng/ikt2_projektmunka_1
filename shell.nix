{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    python3
    tmux
  ];

  shellHook = ''
    if ! tmux has-session -t http 2>/dev/null; then
      tmux new-session -d -s http "python -m http.server"
    fi
  '';
}
