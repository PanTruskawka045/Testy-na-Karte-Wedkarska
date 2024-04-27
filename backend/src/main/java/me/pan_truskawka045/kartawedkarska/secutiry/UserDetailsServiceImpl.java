package me.pan_truskawka045.kartawedkarska.secutiry;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.model.User;
import me.pan_truskawka045.kartawedkarska.service.UserService;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserService userService;

    private static final List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("USER")); //There is no need for more than one authority

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Username %s not found", username)));
        CustomUserDetails customUserDetails = new CustomUserDetails(user);
        customUserDetails.setAuthorities(authorities);
        return customUserDetails;
    }
}
